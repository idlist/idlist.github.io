<script setup lang="ts">
import { defineComponent, h, nextTick, onMounted, ref, watch } from 'vue'
import { useWindowSize, useWindowScroll } from '@vueuse/core'
import { throttle } from 'radash'
import { animate, easeInOut } from 'popmotion'
import { createTimeout } from '@rewl/kit'
import PageNavigator, { type PageNavigatorItem } from './PageNavigator.vue'

const { height } = useWindowSize()
const { y } = useWindowScroll()

const props = withDefaults(defineProps<{
  snapScroll?: boolean
  snapDelay?: number
  snapDuration?: number
}>(), {
  snapScroll: false,
  snapDelay: 1000,
  snapDuration: 1000,
})

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default(): any[]
}>()

type PagesRefMap = Record<number, ReturnType<typeof ref<HTMLDivElement>>>
const pagesRef: PagesRefMap = {}

const Pages = defineComponent({
  setup() {
    return () => slots.default().map((element, i) => {
      const page = ref()
      pagesRef[i] = page
      if (element?.type?.name == 'PageContent') {
        return h('div', { class: 'page-content', ref: page }, element)
      }
    })
  },
})

const setupNavigatorStatus = (): PageNavigatorItem[] => {
  return slots.default()
    .reduce((status, element) => {
      if (element?.type?.name == 'PageContent') {
        status.push({ type: 'dot', progress: 0 })
      }
      else if (element?.type?.name == 'PageDivider') {
        status.push({ type: 'divider' })
      }
      return status
    }, [])
}

const navigatorStatus = ref(setupNavigatorStatus())

onMounted(() => {
  watch(() => slots.default(), () => {
    navigatorStatus.value = setupNavigatorStatus()
  }, { immediate: true })
})

let snapScrollTimeout: ReturnType<typeof createTimeout> | undefined
let scrollAnimation: ReturnType<typeof animate> | undefined
let autoScrollTo: number | undefined

type ScrollAlign = 'top' | 'bottom'

const updateNavigatorStatus = async (windowHeight: number, nextY: number) => {
  let mostDisplayed = 0
  let mostIndex = 0
  let insidePage = false
  let scrollAlign: ScrollAlign = 'top'

  for (const [istr, page] of Object.entries(pagesRef)) {
    const i = parseInt(istr)
    if (navigatorStatus.value[i].type != 'dot') {
      continue
    }

    const rect = page.value!.getBoundingClientRect()
    const { top, bottom } = rect

    let displayed = 0

    if (top <= 0 && bottom >= windowHeight) {
      displayed = 1
      insidePage = true
    } else if (top > 0 && top <= windowHeight && bottom > 0 && bottom < windowHeight) {
      displayed = 1
    } else if (top <= 0 && bottom > 0 && bottom < windowHeight) {
      displayed = bottom / windowHeight
    } else if (top > 0 && top <= windowHeight && bottom >= windowHeight) {
      displayed = (windowHeight - top) / windowHeight
    }

    if (displayed >= mostDisplayed) {
      mostIndex = i
      mostDisplayed = displayed

      if (top >= 0 && bottom > windowHeight) {
        scrollAlign = 'top'
      } else if (top < 0 && bottom <= windowHeight) {
        scrollAlign = 'bottom'
      } else {
        scrollAlign = top > windowHeight - bottom ? 'top' : 'bottom'
      }
    }

    let percent = 0
    if (displayed < 0.25) {
      percent = 0
    } else if (displayed < 0.75) {
      percent = (displayed - 0.25) * 2
    } else {
      percent = 1
    }

    navigatorStatus.value[i].progress = percent
  }

  if (insidePage || !props.snapScroll) {
    return
  }

  snapScrollTimeout?.cancel()

  if (typeof autoScrollTo == 'undefined' || Math.abs(autoScrollTo - nextY) > 1) {
    scrollAnimation?.stop()
  }

  snapScrollTimeout = createTimeout(() => {
    jumpTo(mostIndex, scrollAlign)
    snapScrollTimeout = undefined
  }, props.snapDelay)

  snapScrollTimeout.run()
}

onMounted(() => {
  watch([height, y], throttle({ interval: 50 }, ([wh, y]) => updateNavigatorStatus(wh, y)), { immediate: true })
})

const jumpTo = (index: number, align: ScrollAlign = 'top') => {
  snapScrollTimeout?.cancel()
  scrollAnimation?.stop()

  const page = pagesRef[index].value
  if (!page) return
  const { top, bottom } = page.getBoundingClientRect()

  const delta = align == 'top' ? top : (bottom - height.value)
  let to = window.scrollY + delta
  const toMax = document.body.scrollHeight - height.value
  if (to > toMax) to = toMax

  const from = window.scrollY
  const duration = Math.max((Math.abs(from - to) / height.value - 1) * props.snapDuration, props.snapDuration / 2)

  scrollAnimation = animate({
    from,
    to,
    duration,
    ease: [easeInOut],
    onUpdate: (value) => {
      window.scrollTo({ top: value, behavior: 'instant' })
      autoScrollTo = value
    },
    onComplete: () => scrollAnimation?.stop(),
    onStop: () => {
      nextTick(() => {
        scrollAnimation = undefined
        autoScrollTo = undefined
      })
    },
  })
}
</script>

<template>
  <Pages />
  <PageNavigator :status="navigatorStatus" @jump-to="jumpTo" />
</template>

<style lang="scss">
.page-content {
  min-width: 100%;
}
</style>
