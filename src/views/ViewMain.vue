<script setup lang="ts">
import PageList from '@/components/page/PageList.vue'
import PageContent from '@/components/page/PageContent.vue'
// import PageDivider from '@/components/page/PageDivider.vue'
import PageHome from './view-main/PageHome.vue'
import PageAbility from './view-main/PageAbility.vue'
</script>

<template>
  <PageList>
    <PageContent>
      <PageHome />
    </PageContent>
    <PageContent>
      <PageAbility />
    </PageContent>
    <PageContent>
      Footer
    </PageContent>
  </PageList>
</template>
