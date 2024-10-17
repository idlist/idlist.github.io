<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  percent?: number
}>()

const pathCircle = 'M40,20c5.519,0 10.519,2.24 14.139,5.861c3.621,3.62 5.861,8.62 5.861,14.139c0,5.519 -2.24,10.519 -5.861,14.139c-3.62,3.621 -8.62,5.861 -14.139,5.861c-5.519,0 -10.519,-2.24 -14.139,-5.861c-3.621,-3.62 -5.861,-8.62 -5.861,-14.139c0,-5.519 2.24,-10.519 5.861,-14.139c3.62,-3.621 8.62,-5.861 14.139,-5.861Z'
const pathStar = 'M40,8c5.519,0 8.38,16.38 12,20c3.62,3.62 20,6.481 20,12c-0,5.519 -16.38,8.38 -20,12c-3.62,3.62 -6.481,20 -12,20c-5.519,-0 -8.38,-16.38 -12,-20c-3.62,-3.62 -20,-6.481 -20,-12c-0,-5.519 16.38,-8.38 20,-12c3.62,-3.62 6.481,-20 12,-20Z'

const progress = computed(() => props.percent ?? 0)
const pathMorph = computed(() => pathCircle)
</script>

<template>
  <svg width="100%" height="100%" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path class="dot" :d="pathMorph" fill="none" stroke="#000" stroke-width="6px" />
  </svg>
</template>

<style lang="scss" scoped></style>
