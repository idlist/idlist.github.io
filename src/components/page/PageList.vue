<script setup lang="ts">
import { defineComponent, h, ref, type Ref, watch } from 'vue'
import { useWindowSize, useWindowScroll } from '@vueuse/core'
import PageNavigator from './PageNavigator.vue'
import debounce from 'lodash-es/debounce'
import { animate, clamp, easeInOut } from 'popmotion'
import type { PageNavigatorItem } from './types'

const { height } = useWindowSize()
const { y } = useWindowScroll()

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default(): any[]
}>()

type PagesRefMap = Record<number, Ref<HTMLDivElement>>
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

watch(() => slots.default(), () => {
  navigatorStatus.value = setupNavigatorStatus()
})

let magnetScrollTimeout: ReturnType<typeof setTimeout> | null = null
let magnetScrollAnimation: ReturnType<typeof animate> | null = null

const cancelMagnetScroll = () => {
  if (magnetScrollTimeout) {
    clearTimeout(magnetScrollTimeout)
    magnetScrollTimeout = null
  }
}

type ScrollAlign = 'top' | 'bottom'

const updateNavigatorStatus = (windowHeight: number) => {
  let closestDistance = 1
  let closestIndex = 0
  let insidePage = false
  let scrollAlign: ScrollAlign = 'top'

  for (const [istr, page] of Object.entries(pagesRef)) {
    const i = parseInt(istr)
    if (navigatorStatus.value[i].type != 'dot') {
      continue
    }

    const rect = page.value.getBoundingClientRect()
    const { top, bottom, height } = rect

    if (top <= 0 && bottom >= windowHeight) {
      insidePage = true
    }

    const progress = (height - top) / height
    const peek = clamp(0, 1, progress <= 1 ? progress : 2 - progress)
    const distance = 1 - peek
    if (distance < closestDistance) {
      closestIndex = i
      closestDistance = distance

      if (Math.abs(top) <= Math.abs(bottom - windowHeight)) {
        scrollAlign = 'top'
      } else {
        scrollAlign = 'bottom'
      }
    }

    let percent = 0
    if (peek < 0.25) {
      percent = 0
    } else if (peek < 0.75) {
      percent = (peek - 0.25) * 2
    } else {
      percent = 1
    }

    navigatorStatus.value[i].progress = percent
  }

  cancelMagnetScroll()

  if (insidePage) {
    return
  }

  magnetScrollTimeout = setTimeout(() => {
    jumpTo(closestIndex, scrollAlign)
    magnetScrollTimeout = null
  }, 1000)
}

watch([height, y], debounce(([wh, _]) => updateNavigatorStatus(wh), 100), { immediate: true })

const jumpTo = (index: number, align: ScrollAlign = 'top') => {
  const page = pagesRef[index].value
  const rect = page.getBoundingClientRect()

  let delta: number
  if (align == 'top') {
    delta = rect.top
  } else {
    delta = rect.bottom - height.value
  }
  const destination = window.scrollY + delta

  cancelMagnetScroll()

  if (magnetScrollAnimation) {
    magnetScrollAnimation.stop()
  }

  magnetScrollAnimation = animate({
    from: window.scrollY,
    to: destination,
    duration: Math.max(Math.abs(delta) / height.value * 500, 250),
    ease: [easeInOut],
    onUpdate: (value) => window.scrollTo({ top: value, behavior: 'instant' }),
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
  min-height: 75vh;
}
</style>
