<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue'
import { debounce } from 'radash'
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { createDelay, createFrames } from '@rewl/kit'

const { height: wh } = useWindowSize()
const { y } = useWindowScroll()

const props = withDefaults(defineProps<{
  name?: string
  delay?: number
  toggleBy?: boolean
  once?: boolean
}>(), {
  name: 'v',
  delay: 0,
  toggleBy: undefined,
})

const emit = defineEmits<{
  (event: 'toggle', update: boolean): void
}>()

const el = useTemplateRef('el')
const classEnterFrom = computed(() => `${props.name}-enter-from`)
const classEnterActive = computed(() => `${props.name}-enter-active`)
const delay = createDelay(() => props.delay)

let show: ReturnType<typeof ref<boolean>> | ReturnType<typeof computed<boolean>>

const cleanUp = () => {
  if (!el.value) return
  el.value.classList.remove(classEnterFrom.value, classEnterActive.value)
  el.value.removeEventListener('transitionend', cleanUp)
  el.value.removeEventListener('transitioncancel', cleanUp)
}

const showElement = async () => {
  if (!el.value) return

  delay.cancel()
  await delay.run()

  el.value.classList.remove('opacity-0')
  el.value.classList.add(classEnterFrom.value)

  const frames = await createFrames()
  await frames.next()
  el.value.classList.add(classEnterActive.value)

  await frames.next()
  el.value.classList.remove(classEnterFrom.value)
  el.value.addEventListener('transitionend', cleanUp)
  el.value.addEventListener('transitioncancel', cleanUp)
}

const hideElement = () => {
  if (!el.value) return
  el.value.classList.add('opacity-0')
}

let stopDetectAppearance: ReturnType<typeof watch> | undefined
let stopWatchShowCondition: ReturnType<typeof watch> | undefined

onMounted(() => {
  if (typeof props.toggleBy != 'undefined') {
    show = computed(() => props.toggleBy!)
  } else {
    show = ref(false)

    stopDetectAppearance = watch([wh, y], debounce({ delay: 100 }, ([wh, _]) => {
      if (!el.value) return

      const { top, bottom } = el.value.getBoundingClientRect()

      const inWindow = top > 0 && bottom < wh
      const outOfWindow = bottom < 0 || top > wh

      let next = show.value!

      if (!show.value && inWindow) {
        next = true
        if (props.once) nextTick(() => stopDetectAppearance?.())
      }
      if (show.value && outOfWindow) next = false

      emit('toggle', next)
      show.value = next
    }), { immediate: true })
  }

  stopWatchShowCondition = watch(show, (now) => {
    if (now) {
      showElement()
    } else {
      hideElement()
    }
  }, { immediate: true })
})

onUnmounted(() => {
  stopDetectAppearance?.()
  stopWatchShowCondition?.()
})
</script>

<template>
  <div ref="el" class="on-appear opacity-0">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.on-appear {
  display: flex;
}

.opacity-0 {
  opacity: 0
}
</style>
