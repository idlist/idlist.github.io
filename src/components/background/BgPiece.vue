<script setup lang="ts">
import PieceSvg from '@/assets/byme/bg_piece.svg'

const props = withDefaults(defineProps<{
  opacity?: number
  startAt?: number
}>(), {
  opacity: 1,
  startAt: 1,
})

const d = 2.0
const cssDuration = `${d}s`
const delayTime = props.startAt % 1 * d - (d)
const cssDelayTime = `${delayTime}s`
</script>

<template>
  <div :class="bgPiece.wrapper">
    <img class="static" :class="bgPiece.blink" :src="PieceSvg" alt="background piece" />
  </div>
</template>

<style lang="scss" module="bgPiece">
.wrapper {
  opacity: v-bind('opacity');
  position: absolute;
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.blink {
  animation-name: blink;
  animation-direction: alternate;
  animation-duration: v-bind('cssDuration');
  animation-delay: v-bind('cssDelayTime');
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
</style>
