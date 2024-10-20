<script setup lang="ts">
import FullPage from '@/components/background/FullPage.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <FullPage>
    {{ t('hello-world') }}
  </FullPage>
</template>
