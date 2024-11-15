<template>
  <div class="static bg-invert">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.bg-invert {
  backdrop-filter: invert(1);
}
</style>
