<script setup lang="ts">
import ParallaxWave from './ParallaxWave.vue'
</script>

<template>
  <div class="full-screen static bg-wave">
    <ParallaxWave
      :width="800"
      :height="160"
      :base-height="140"
      color="hsla(0, 0%, 0%, 0.02)"
      :duration="12" />
    <ParallaxWave
      :width="960"
      :height="140"
      :base-height="120"
      color="hsla(0, 0%, 0%, 0.0225)"
      :duration="18" />
    <ParallaxWave
      :width="1080"
      :height="120"
      :base-height="80"
      color="hsla(0, 0%, 0%, 0.025)"
      :duration="28" />
  </div>
</template>

<style lang="scss">
.bg-wave {
  z-index: -2;
}
</style>
