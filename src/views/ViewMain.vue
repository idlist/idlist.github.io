<script setup lang="ts">
import PageList from '@/components/page/PageList.vue'
import PageContent from '@/components/page/PageContent.vue'
import PageDivider from '@/components/page/PageDivider.vue'
import PageHome from './view-main/PageHome.vue'
import PageAbility from './view-main/PageAbility.vue'
import PageFooter from './view-main/PageFooter.vue'
</script>

<template>
  <PageList snap-scroll>
    <PageContent>
      <PageHome />
    </PageContent>

    <PageDivider />

    <PageContent>
      <PageAbility />
    </PageContent>

    <PageDivider />

    <PageContent>
      <PageFooter />
    </PageContent>
  </PageList>
</template>
