<script setup lang="ts">
export interface MasteryCategoryProps {
  color?: string
}

withDefaults(defineProps<MasteryCategoryProps>(), {
  color: '#fff',
})
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
  background-color: v-bind('color');
}
</style>
