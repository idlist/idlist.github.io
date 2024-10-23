<script setup lang="ts">
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { range } from '@/utils'

const props = defineProps<{
  width?: number
  height?: number
  color: string
  baseHeight: number
  duration: number
}>()

const w = computed(() => props.width ?? 600)
const h = computed(() => props.height ?? 240)
const cssBaseHeight = computed(() => `${props.baseHeight}px`)
const cssDuration = computed(() => `${props.duration}s`)

const { width: ww } = useWindowSize()
const n = computed(() => Math.ceil(ww.value / w.value) + 2)

const delay = Math.random() * props.duration
const cssDelay = computed(() => `${-delay}s`)
</script>

<template>
  <div class="parallax-wave">
    <div class="wave">
      <svg v-for="i of range(n)"
        :key="i"
        :width="w"
        :height="h"
        :fill="color"
        class="wave-svg"
        viewBox="0 0 1200 240"
        preserveAspectRatio="none">
        <path d="M0,0c220,0 380,240 600,240l-600,0c0,0 0,-160 0,-240Z" />
        <path d="M1200,0c-220,0 -380,240 -600,240l600,0c0,0 0,-160 0,-240Z" />
      </svg>
    </div>

    <div class="wave-base"></div>
  </div>
</template>

<style lang="scss" scoped>
.parallax-wave {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.wave {
  width: 100%;
  display: flex;
  flex-direction: row;
}

@keyframes waving {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

.wave-svg {
  flex-shrink: 0;

  animation-name: waving;
  animation-timing-function: linear;
  animation-duration: v-bind('cssDuration');
  animation-iteration-count: infinite;
  animation-delay: v-bind('cssDelay');
}

.wave-base {
  width: 100%;
  height: v-bind('cssBaseHeight');
  background-color: v-bind('color');
}
</style>
