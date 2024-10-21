<script setup lang="ts">
import FullPage from '@/components/background/FullPage.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <FullPage>
    <div class="home">
      i'DLisT
    </div>
  </FullPage>
</template>

<style lang="scss">
.home {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}
</style>
