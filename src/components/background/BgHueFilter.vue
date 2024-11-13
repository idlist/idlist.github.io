<script setup lang="ts">
const props = defineProps<{
  hue?: number
}>()

const cssColor = `hsla(${props.hue ?? 10}, 100%, 50%, 0.5)`
</script>

<template>
  <div class="static no-events bg-filter">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.bg-filter {
  mix-blend-mode: color;
  background-color: v-bind('cssColor');
}
</style>
