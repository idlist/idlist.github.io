<script setup lang="ts">
import { computed, ref, watch, type Component } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { throttle } from 'radash'

const props = withDefaults(defineProps<{
  background?: Component
}>(), {
  background: undefined,
})

defineOptions({
  inheritAttrs: false,
})

const { height } = useWindowSize()
const heightDebounced = ref(height.value)
const cssHeightDebounced = computed(() => `${heightDebounced.value}px`)

watch(height, throttle({ interval: 100 }, (h) => {
  const percent = Math.abs(heightDebounced.value - h) / heightDebounced.value
  if (percent > 0.25) heightDebounced.value = h
}))

const outerPosition = computed(() => props.background ? 'inherit' : 'relative')
const innerPosition = computed(() => props.background ? 'relative': 'inherit')
</script>

<template>
  <div class="full-page">
    <component :is="background" v-if="background" class="background" v-bind="$attrs">
      <slot></slot>
    </component>

    <slot v-else v-bind="$attrs"></slot>
  </div>
</template>

<style lang="scss">
.full-page {
  min-width: 100%;
  min-height: v-bind('cssHeightDebounced');
  position: v-bind('outerPosition');

  .background {
    min-width: 100%;
    min-height: v-bind('cssHeightDebounced');
    position: v-bind('innerPosition');
  }
}
</style>
