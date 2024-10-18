<script setup lang="ts">
defineOptions({
  name: 'PageContent',
})
</script>

<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.page-content {
  min-width: 100%;
  min-height: 100vh;
}
</style>
