<script setup lang="ts">
import FullPage from '@/components/page/FullPage.vue'
import BgInvert from '@/components/background/BgInvert.vue'
</script>

<template>
  <div :style="{ width: '100%', height: '150vh', position: 'relative' }">
    <BgInvert>
      <div :style="{ color: 'white' }">Ability</div>
    </BgInvert>
  </div>
</template>
