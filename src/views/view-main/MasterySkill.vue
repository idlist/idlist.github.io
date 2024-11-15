<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import icon_star from '@/assets/svgrepo/star.svg'
import icon_heart from '@/assets/svgrepo/heart.svg'

export interface MasterySkillProps {
  icon?: string
  name?: string
  link?: string
  desc?: string
  descPath?: string
  star?: boolean
  fav?: boolean
}

const props = defineProps<MasterySkillProps>()

const { t } = useI18n()

const buttonAttrs = computed<Record<string, unknown>>(() => {
  return props.link ? {
    href: props.link,
    target: '_blank',
    noopener: '',
    noreferer: '',
  } : {}
})

const padStart = computed(() => !props.icon)
const padEnd = computed(() => !props.desc && !props.descPath)
</script>

<template>
  <component :is="link ? 'a' : 'div'" class="mastery-skill" v-bind="buttonAttrs">
    <div class="inner fx-quick-hover">
      <div v-if="padStart"></div>

      <div v-if="icon" class="icon">
        <img class="icon-md" :src="icon" :alt="`icon of ${name}`" />
      </div>

      <slot></slot>

      <img v-if="star" class="icon-sm" :src="icon_star" alt="good at" />
      <img v-if="fav" class="icon-sm" :src="icon_heart" alt="like" />

      <div v-if="descPath" class="description">{{ t(descPath) }}</div>
      <div v-if="desc" class="description">{{ desc }}</div>

      <div v-if="padEnd"></div>
    </div>
  </component>
</template>

<style lang="scss">
@use 'sass:math';

$size: 1.75rem;
$radius: math.div($size, 2);

.mastery-skill {
  padding: 0.25rem;

  border: 1px solid #fff;
  border-radius: $size;

  .inner {
    min-height: $size;
    border-radius: $radius;

    display: flex;
    align-items: center;
    column-gap: 0.25rem;

    color: #fff;

    &:hover {
      background-color: hsla(0, 2%, 36%, 0.25);
    }
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsla(0, 0%, 100%, 0.9);
    width: $size;
    height: $size;
    border-radius: $radius;
  }

  .description {
    display: flex;
    align-items: center;

    font-size: 0.875em;
    height: $size;
    border-radius: 0.25rem $radius $radius 0.25rem;
    padding: 0 0.375rem 0 0.25rem;

    color: #000;
    background-color: hsla(0, 0%, 100%, 0.9);
  }
}
</style>
