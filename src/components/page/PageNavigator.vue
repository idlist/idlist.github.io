<script setup lang="ts">
import { ref } from 'vue'
import PageMorphDot from './PageMorphDot.vue'
import type { PageNavigatorItem } from './types'
import { createArray } from '@/utils'

const props = defineProps<{
  status: PageNavigatorItem[]
}>()

const emit = defineEmits<{
  (e: 'jumpTo', index: number): void
}>()

const hover = ref<boolean[]>(createArray<boolean>(props.status.length).fill(false))
</script>

<template>
  <div class="card page-navigator">
    <template v-for="(state, i) of status" :key="i">
      <div v-if="state.type == 'dot'"
        class="page-navigator-dot"
        @mouseover="hover[i] = true"
        @mouseleave="hover[i] = false"
        @click="emit('jumpTo', i)">
        <PageMorphDot
          :percent="state.progress"
          :hover="hover[i]" />
      </div>
      <div v-if="state.type == 'divider'" class="page-navigator-divider"></div>
    </template>
  </div>
</template>

<style lang="scss">
.page-navigator {
  z-index: 1;
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
}

.page-navigator-dot {
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.25rem;
  cursor: pointer;
}

.page-navigator-divider {
  margin: 0.25rem;
  border-bottom: 1px solid hsl(0, 0%, 10%);
}
</style>
