<script setup lang="ts">
import { range } from '@rewl/kit'
import BgPiece from './BgPiece.vue'

const c: number[][] = [
  range(11),
  range(9),
  range(8),
  range(6),
  range(5),
  [0, 1, 2, 4.5],
  [1, 2],
  [2.25],
  [1.75, 4.25],
]

const l = <T>(arr: T[]) => arr.length
const size = 100
const h = 30
const xOffset = -56
const w = 100
const yOffset = -80

const r = Math.random
const x = (i: number) => xOffset + i * h
const y = (i: number, j: number) => yOffset + j * w + (i % 2 == 0 ? 0 : w / 2)
const opacity = (i: number, j: number) => (l(c) - i + 1) * 0.01 + r() * (l(c[i]) - j + 1) * 0.015
</script>

<template>
  <div class="full-screen static bg-dynamic">
    <template v-for="i in range(c.length)" :key="i">
      <template v-for="j in c[i]" :key="j">
        <BgPiece
          :style="{
            width: `${size}px`,
            bottom: `${x(i)}px`,
            left: `${y(i, j)}px`
          }"
          :opacity="opacity(i, j)"
          :start-at="r()" />
      </template>
    </template>
  </div>
</template>

<style lang="scss">
.bg-dynamic {
  z-index: -1;
  background: hsla(0, 0%, 0%, 0.02);
  background: linear-gradient(10deg, hsla(0, 0%, 0%, 0.05) 0%, hsla(0, 0%, 0%, 0.02) 100%)
}
</style>
