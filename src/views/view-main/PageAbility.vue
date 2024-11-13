<script setup lang="ts">
import FullPage from '@/components/background/FullPage.vue'
import BgInvert from '@/components/background/BgInvert.vue'
</script>

<template>
  <FullPage :background="BgInvert" class="page-ability">
    <div class="container">
      Ability
    </div>
  </FullPage>
</template>

<style lang="scss">
.page-ability {
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    padding: 1rem;
  }
}
</style>
