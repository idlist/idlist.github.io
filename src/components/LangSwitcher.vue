<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Globe from '@/assets/svgrepo/globe.svg'
import type { Locales } from '@/types'

const { locale } = useI18n()
const isOpen = ref(false)

const toLang = (lang: Locales) => {
  locale.value = lang
  isOpen.value = false
}
</script>

<template>
  <Transition name="lang-switcher">
    <button v-show="!isOpen"
      type="button"
      class="card lang-switcher"
      @click="isOpen = true">
      <div>
        <img :src="Globe" alt="switch language" />
      </div>
    </button>
  </Transition>

  <div v-show="isOpen" class="full-screen lang-list__close" @click="isOpen = false"></div>

  <Transition name="lang-list">
    <div v-show="isOpen" class="card lang-list">
      <button type="button" @click="toLang('en')">
        English
      </button>
      <button type="button" @click="toLang('zh')">
        简体中文
      </button>
    </div>
  </Transition>
</template>

<style lang="scss">
.lang-switcher-enter-from,
.lang-switcher-leave-to {
  transform: rotate(30deg);
  opacity: 0;
}

.lang-switcher-enter-active,
.lang-switcher-leave-active {
  transition: all 0.5s ease-out;
}

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

  div {
    display: flex;
    padding: 0.125rem;
  }

  div:hover {
    border-radius: 50%;
    background-color: hsla(0, 0%, 0%, 10%);
  }

  img {
    width: 100%;
    height: 100%;
  }
}

.lang-list-enter-from,
.lang-list-leave-to {
  transform: translateX(-0.5rem);
  opacity: 0;
}

.lang-list-enter-active,
.lang-list-leave-active {
  transition: all 0.5s ease;
}

.lang-list__close {
  z-index: 15;
}

.lang-list {
  z-index: 16;
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem;

  display: flex;
  flex-direction: column;
  text-align: right;

  button {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;

    &:hover {
      background-color: hsla(0, 0%, 0%, 10%);
    }
  }
}
</style>
