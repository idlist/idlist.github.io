<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { interpolate, clamp, animate } from 'popmotion'

const props = defineProps<{
  percent?: number
  hover?: boolean
}>()

// Inspired by https://svelte.dev/repl/a6268cfc4685416998c6e64516546acd?version=3.59.2
const pathCircle = 'M40,20c5.519,0 10.519,2.24 14.139,5.861c3.621,3.62 5.861,8.62 5.861,14.139c0,5.519 -2.24,10.519 -5.861,14.139c-3.62,3.621 -8.62,5.861 -14.139,5.861c-5.519,0 -10.519,-2.24 -14.139,-5.861c-3.621,-3.62 -5.861,-8.62 -5.861,-14.139c0,-5.519 2.24,-10.519 5.861,-14.139c3.62,-3.621 8.62,-5.861 14.139,-5.861Z'
const pathStar = 'M40,8c5.519,0 8.38,16.38 12,20c3.62,3.62 20,6.481 20,12c-0,5.519 -16.38,8.38 -20,12c-3.62,3.62 -6.481,20 -12,20c-5.519,-0 -8.38,-16.38 -12,-20c-3.62,-3.62 -20,-6.481 -20,-12c-0,-5.519 16.38,-8.38 20,-12c3.62,-3.62 6.481,-20 12,-20Z'

const pathToNumbers = (p: string) => p.replace(/[McZ]/g, ',')
  .split(/[, ]/g)
  .filter((s) => s != '')
  .map((s) => parseFloat(s))

const numbersToPath = (n: number[]) => {
  const joined = n.reduce((acc, cur, i) => {
    acc += (i % 6 == 1 && i != n.length - 1) ? `${cur} c ` : `${cur} `
    return acc
  }, '')
  return `M ${joined}Z`
}

const pathNumbersCircle = pathToNumbers(pathCircle)
const pathNumbersStar = pathToNumbers(pathStar)

const pathNumberMorph = interpolate([0, 1], [pathNumbersCircle, pathNumbersStar])

const initialPercent = clamp(0, 1, (props.percent ?? 0))
const progress = ref(initialPercent)

let animation: ReturnType<typeof animate> | null = null

watch(() => props.percent ?? 0, (next, prev) => {
  if (next == prev) {
    return
  }

  if (animation) {
    animation.stop()
  }

  animation = animate({
    from: progress.value,
    to: next,
    duration: Math.abs(progress.value - next) * 200,
    onUpdate: (latest) => progress.value = latest,
  })
})

const pathMorph = computed(() => numbersToPath(pathNumberMorph(progress.value)))
</script>

<template>
  <svg width="100%" height="100%" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path :d="pathMorph" :fill="hover ? 'hsla(0, 0%, 0%, 100%)' : 'hsla(0, 0%, 0%, 0%)'" stroke="#000" stroke-width="6px" />
  </svg>
</template>

<style lang="scss" scoped>
svg path {
  transition: fill 0.25s linear;
}
</style>
