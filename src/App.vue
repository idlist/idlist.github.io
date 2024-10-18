<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import BgDynamic from '@/components/background/BgDynamic.vue'
// import BgFilter from './components/background/BgFilter.vue'
import PageList from './components/page/PageList.vue'
import PageContent from './components/page/PageContent.vue'
import PageDivider from './components/page/PageDivider.vue'
</script>

<template>
  <BgDynamic />
  <PageList>
    <PageContent>Home</PageContent>
    <PageDivider />
    <PageContent>1</PageContent>
    <PageContent>2</PageContent>
    <PageDivider />
    <PageContent>Footer</PageContent>
  </PageList>
</template>

<style scoped>
</style>
