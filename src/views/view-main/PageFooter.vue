<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { CopyrightYears, LastUpdate } from '@/generated'
import FullPage from '@/components/background/FullPage.vue'

const { t } = useI18n()
</script>

<template>
  <FullPage>
    <div class="centered">
      {{ t('footer.eof') }}
    </div>
    <div class="bottom-line">
      <div class="static sign">
        <div>i'DLisT © {{ CopyrightYears }}</div>
        <div>{{ t('footer.last-update') }}{{ LastUpdate }}</div>
      </div>
    </div>
  </FullPage>
</template>

<style lang="scss">
@use '@/scss.scss' as *;

.centered {
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom-line {
  position: absolute;
  bottom: 4rem;

  width: 100%;
  display: flex;
  justify-content: center;

  .sign {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-items: center;
    row-gap: 0.25rem;
    column-gap: 1rem;

    color: #666;
    background-color: hsla(0, 0%, 100%, 50%);

    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    @media (max-width: $screen-md) {
      grid-template-columns: auto;
    }
  }
}
</style>
