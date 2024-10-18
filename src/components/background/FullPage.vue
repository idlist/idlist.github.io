<script setup lang="ts">
import type { Component } from 'vue'

const props = defineProps<{
  minHeight?: string
  background?: Component
}>()

const cssMinHeight = props.minHeight ?? '100vh'
</script>

<template>
  <div class="full-page">
    <template v-if="background">
      <component :is="background" />
    </template>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.full-page {
  min-width: 100%;
  min-height: v-bind('cssMinHeight');
  position: relative;
}
</style>
