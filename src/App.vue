<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import BgDynamic from '@/components/background/BgDynamic.vue'
// import BgFilter from './components/background/BgFilter.vue'
import PageList from './components/page/PageList.vue'
import PageContent from './components/page/PageContent.vue'
</script>

<template>
  <BgDynamic />
  <!-- <BgFilter :hue="10" /> -->
  <PageList>
    <PageContent>1</PageContent>
    <PageContent>2</PageContent>
    <PageContent>3</PageContent>
  </PageList>
</template>

<style scoped>
</style>
