<script setup lang="ts">
import { defineComponent, h, computed, type VNode } from 'vue'
import PageNavigator from './PageNavigator.vue'

const slots = defineSlots<{
  default(): VNode[]
}>()

const numberOfPages = computed(() => slots.default().length)

const Pages = defineComponent({
  render() {
    return slots.default().map((element) => {
      return h('div', h(element))
    })
  },
})
</script>

<template>
  <PageNavigator :number-of-pages="numberOfPages" />
  <Pages />
</template>
