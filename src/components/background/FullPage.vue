<script setup lang="ts">
import { type Component } from 'vue'

const props = defineProps<{
  minHeight?: string
  background?: Component
}>()

defineOptions({
  inheritAttrs: false,
})

const cssMinHeight = props.minHeight ?? '100vh'
</script>

<template>
  <div class="full-page">
    <component :is="background" v-if="background" class="background" v-bind="$attrs">
      <slot></slot>
    </component>

    <slot v-else v-bind="$attrs"></slot>
  </div>
</template>

<style lang="scss" scoped>
.full-page {
  min-width: 100%;
  min-height: v-bind('cssMinHeight');

  .background {
    min-width: 100%;
    min-height: v-bind('cssMinHeight');
  }
}
</style>
