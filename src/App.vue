<script setup lang="ts">
import { RouterView } from 'vue-router'
import BgWave from './components/background/BgWave.vue'
import BgDynamic from '@/components/background/BgDynamic.vue'
import LangSwitcher from './components/LangSwitcher.vue'
</script>

<template>
  <BgWave />
  <BgDynamic />
  <LangSwitcher />
  <RouterView />
</template>
