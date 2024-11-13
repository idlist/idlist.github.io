<script setup lang="ts">

export interface MasterySkillProps {
  icon: string
  iconAlt: string
  link?: string
}

const props = defineProps<MasterySkillProps>()
</script>

<template>
  <div class="mastery-category">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.mastery-category {
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
  color: black;
}
</style>
