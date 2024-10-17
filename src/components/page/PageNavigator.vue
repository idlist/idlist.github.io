<script setup lang="ts">
import PageMorphDot from './PageMorphDot.vue'
import { range } from '@/utils'

const props = defineProps<{
  numberOfPages: number
}>()
</script>

<template>
  <div class="page-navigator">
    <div v-for="i in range(numberOfPages)" :key="i" class="page-navigator-dot">
      <PageMorphDot />
    </div>
  </div>
</template>

<style lang="scss">
.page-navigator {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  background-color: hsla(0, 0%, 100%, 80%);
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.page-navigator-dot {
  width: 1rem;
  height: 1rem;
}
</style>
