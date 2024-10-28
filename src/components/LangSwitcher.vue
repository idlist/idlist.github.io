<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { SupportedLocale } from '@/main'
import { useLocaleStorage } from '@/uses'

import Globe from '@/assets/svgrepo/globe.svg'
import ArrowLeft from '@/assets/svgrepo/arrow_left.svg'

const { locale } = useI18n()
const localeStorage = useLocaleStorage()

const isOpen = ref(false)

const toLang = (lang: SupportedLocale) => {
  locale.value = lang
  localeStorage.value = lang
  isOpen.value = false
}

interface Lang {
  code: SupportedLocale
  name: string
}

const langs: Lang[] = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'zh',
    name: '简体中文',
  },
]
</script>

<template>
  <Transition name="lang-switcher">
    <button v-show="!isOpen"
      type="button"
      class="card lang-switcher"
      @click="isOpen = true">
      <div class="lang-switcher__container fx-quick-hover">
        <img :src="Globe" alt="switch language" />
      </div>
    </button>
  </Transition>

  <div v-show="isOpen" class="full-screen lang-list__close" @click="isOpen = false"></div>

  <Transition name="lang-list">
    <div v-show="isOpen" class="card lang-list">
      <button
        v-for="lang of langs"
        :key="lang.code"
        type="button"
        class="fx-quick-hover"
        @click="toLang(lang.code)">
        {{ lang.name }}
        <div class="lang-list__selected">
          <img v-if="lang.code == locale" :src="ArrowLeft" alt="current language" />
        </div>
      </button>
    </div>
  </Transition>
</template>

<style lang="scss">
.lang-switcher {
  z-index: 16;
  position: fixed;
  top: 1rem;
  right: 1rem;

  display: flex;
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  cursor: pointer;

  &__container {
    display: flex;
    padding: 0.125rem;
  }

  &__container:hover {
    border-radius: 50%;
    background-color: hsla(0, 0%, 0%, 10%);
  }

  img {
    width: 100%;
    height: 100%;
  }

  &-enter-from,
  &-leave-to {
    transform: rotate(30deg);
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease-out;
  }
}

.lang-list {
  z-index: 16;
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem;

  display: flex;
  flex-direction: column;

  &__close {
    z-index: 15;
  }

  button {
    font-size: 0.875rem;
    padding: 0.5rem 0.375rem 0.5rem 0.75rem;
    border-radius: 0.25rem;

    display: flex;
    justify-content: end;
    align-items: center;
    column-gap: 0.125rem;
  }

  button:hover {
    background-color: hsla(0, 0%, 0%, 10%);
  }

  &__selected {
    width: 1rem;
    height: 1rem;
    padding: 0.125rem;

    img {
      width: 100%;
      height: 100%;
      transform: translateY(-1px);
    }
  }

  &-enter-from,
  &-leave-to {
    transform: translateX(-0.5rem);
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
  }
}
</style>
