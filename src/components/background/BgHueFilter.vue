<script setup lang="ts">
const props = defineProps<{
  hue?: number
}>()

const cssColor = `hsla(${props.hue ?? 10}, 100%, 50%, 0.5)`
</script>

<template>
  <div class="static bg-filter"></div>
</template>

<style lang="scss">
.bg-filter-border {
  border-bottom: 1px solid hsl(0, 0%, 60%);
}

.bg-filter {
  min-width: 100%;

  mix-blend-mode: color;
  background-color: v-bind('cssColor');
}
</style>
