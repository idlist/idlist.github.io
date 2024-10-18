<script setup lang="ts">
import { defineComponent, h, ref, type Ref, watch } from 'vue'
import { useWindowSize, useWindowScroll } from '@vueuse/core'
import PageNavigator from './PageNavigator.vue'
import debounce from 'lodash-es/debounce'
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
        return h('div', { ref: page }, element)
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

const updateNavigatorStatus = (h: number) => {
  for (const [istr, page] of Object.entries(pagesRef)) {
    const i = parseInt(istr)
    if (navigatorStatus.value[i].type != 'dot') {
      continue
    }

    const top = page.value.getBoundingClientRect().top
    const progress = (h - top) / h
    const peek = progress <= 1 ? progress : 2 - progress
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
}

watch([height, y], debounce(([h, _]) => updateNavigatorStatus(h), 100), { immediate: true })

const jumpTo = (index: number) => {
  const page = pagesRef[index].value
  const destination = window.scrollY + page.getBoundingClientRect().top

  window.scrollTo({ top: destination, behavior: 'smooth' })
}
</script>

<template>
  <PageNavigator :status="navigatorStatus" @jump-to="jumpTo" />
  <Pages />
</template>
