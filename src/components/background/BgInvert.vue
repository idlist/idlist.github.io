<template>
  <div class="static bg-invert">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.bg-invert {
  min-width: 100%;
  min-height: 100%;

  backdrop-filter: invert(1);
}
</style>
