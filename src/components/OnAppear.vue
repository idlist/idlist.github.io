<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef, watch, type WatchHandle } from 'vue'
import { debounce } from 'radash'
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { createDelay, nextFrame } from '@/utils'

const { height: wh } = useWindowSize()
const { y } = useWindowScroll()

const props = defineProps<{
  name?: string
  delay?: number
}>()

const el = useTemplateRef('el')
const name = computed(() => props.name ?? 'v')
const classEnterFrom = computed(() => `${name.value}-enter-from`)
const classEnterActive = computed(() => `${name.value}-enter-active`)
const delay = computed(() => createDelay(props.delay ?? 0))

const show = ref(false)

let unwatchShowCondition: WatchHandle

onMounted(() => {
  unwatchShowCondition = watch([wh, y], debounce({ delay: 100 }, ([wh, _]) => {
    if (!el.value) {
      return
    }

    const { top, bottom } = el.value.getBoundingClientRect()

    const inWindow = top > 0 && bottom < wh
    const outOfWindow = bottom < 0 || top > wh

    let next = show.value

    if (!show.value && inWindow) {
      next = true
    }
    if (show.value && outOfWindow) {
      next = false
    }

    show.value = next
  }), { immediate: true })
})

onUnmounted(() => {
  unwatchShowCondition()
})

const cleanUp = () => {
  el.value?.classList.remove(classEnterFrom.value, classEnterActive.value)
  el.value?.removeEventListener('transitionend', cleanUp)
  el.value?.removeEventListener('transitioncancel', cleanUp)
}

const showElement = async () => {
  if (!el.value) {
    return
  }

  delay.value.cancel()
  await delay.value.run()

  el.value.classList.remove('opacity-0')
  el.value.classList.add(classEnterFrom.value)

  await nextFrame(() => {
    el.value?.classList.add(classEnterActive.value)
  })
  await nextFrame(() => {
    el.value?.classList.remove(classEnterFrom.value)

    el.value?.addEventListener('transitionend', cleanUp)
    el.value?.addEventListener('transitioncancel', cleanUp)
  })
}

const hideElement = () => {
  el.value?.classList.add('opacity-0')
}

watch(show, (now) => {
  if (now) {
    showElement()
  } else {
    hideElement()
  }
}, { immediate: true })
</script>

<template>
  <div ref="el" class="transition-on-show opacity-0">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.transition-on-show {
  display: flex;
}

.opacity-0 {
  opacity: 0
}
</style>
