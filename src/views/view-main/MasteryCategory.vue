<script setup lang="ts">
import { computed } from 'vue'

export interface MasteryCategoryProps {
  color?: string
}

const props = defineProps<MasteryCategoryProps>()
const cssColor = computed(() => props.color ?? '#fff')
</script>

<template>
  <div class="mastery-category">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.mastery-category {
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: black;
  background-color: v-bind('cssColor');
}
</style>
