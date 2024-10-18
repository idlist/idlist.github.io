<script setup lang="ts">
import PageList from '@/components/page/PageList.vue'
import PageContent from '@/components/page/PageContent.vue'
import PageDivider from '@/components/page/PageDivider.vue'
import PageHome from './ViewMain/PageHome.vue'
import PageAbility from './ViewMain/PageAbility.vue'
</script>

<template>
  <PageList>
    <PageContent>
      <PageHome />
    </PageContent>
    <PageDivider />
    <PageContent>
      <PageAbility />
    </PageContent>
    <PageContent>2</PageContent>
    <PageDivider />
    <PageContent>footer</PageContent>
  </PageList>
</template>
