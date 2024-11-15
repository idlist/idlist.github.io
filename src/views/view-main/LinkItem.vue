<script setup lang="ts">
export interface LinkItemProps {
  icon: string
  iconAlt?: string
  type: string
  link: string
}

defineProps<LinkItemProps>()
</script>

<template>
  <a class="card link-item" :href="link" target="_blank" noopener noreferer>
    <div class="hover-fx fx-quick-hover">
      <div class="type">
        <img class="icon-md" :src="icon" :alt="iconAlt" />
        <div>{{ type }}</div>
      </div>
      <slot></slot>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.link-item {
  display: flex;
  column-gap: 0.25rem;
  align-items: center;
  border-radius: 10rem;

  padding: 0.25rem;

  .hover-fx {
    border-radius: 10rem;
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
    padding-right: 0.5rem;

    &:hover {
      background-color: hsla(0, 0%, 0%, 10%);
    }
  }

  .type {
    display: flex;
    align-items: center;
    column-gap: 0.25rem;

    padding: 0.375rem 0.5rem;
    border-radius: 1rem 0.5rem 0.5rem 1rem;

    font-size: 0.875rem;
    color: #fff;
    background-color: hsl(0, 0%, 10%);
  }
}
</style>
