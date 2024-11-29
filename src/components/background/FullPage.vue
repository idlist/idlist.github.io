<script setup lang="ts">
import { computed, type Component } from 'vue'

const props = withDefaults(defineProps<{
  background?: Component
}>(), {
  background: undefined,
})

defineOptions({
  inheritAttrs: false,
})

const outerPosition = computed(() => props.background ? 'inherit' : 'relative')
const innerPosition = computed(() => props.background ? 'relative' : 'inherit')
</script>

<template>
  <div class="full-page" v-bind="background ? {} : $attrs">
    <component :is="background" v-if="background" class="background" v-bind="$attrs">
      <slot></slot>
    </component>

    <slot v-else></slot>
  </div>
</template>

<style lang="scss">
.full-page {
  min-width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  position: v-bind('outerPosition');

  .background {
    min-width: 100%;
    min-height: 100vh;
    min-height: 100svh;
    position: v-bind('innerPosition');
  }
}
</style>
