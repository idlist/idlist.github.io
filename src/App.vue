<script setup lang="ts">
import { RouterView } from 'vue-router'
import BgDynamic from '@/components/background/BgDynamic.vue'
import LangSwitcher from './components/LangSwitcher.vue'
</script>

<template>
  <BgDynamic />
  <LangSwitcher />
  <RouterView />
</template>
