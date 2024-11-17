<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FullPage from '@/components/background/FullPage.vue'
import BgInvert from '@/components/background/BgInvert.vue'
import MasteryCategory from './MasteryCategory.vue'
import MasterySkill from './MasterySkill.vue'
import OnAppear from '@/components/OnAppear.vue'

import masteries from './masteries'
import { ref } from 'vue'

const { t } = useI18n()

const show = ref(false)
const showContent = (update: boolean) => {
  if (update) show.value = true
}
</script>

<template>
  <FullPage :background="BgInvert" class="page-ability">
    <div class="container">
      <OnAppear name="from-right" once @toggle="showContent">
        <h2 class="static mastery">{{ t('ability.mastery') }}</h2>
      </OnAppear>

      <OnAppear v-for="[i, mastery] of masteries.entries()"
        :key="mastery.path"
        :delay="i * 100"
        :toggle-by="show"
        name="from-right"
        class="mastery-list"
        once>
        <MasteryCategory :color="mastery.color">
          {{ t(`ability.masteries.${mastery.path}`) }}
        </MasteryCategory>

        <OnAppear v-for="[j, skill] of mastery.skills.entries()"
          :key="skill.path"
          :delay="i * 100 + j * 50"
          :toggle-by="show"
          name="from-right"
          once>
          <MasterySkill v-bind="skill">
            {{ skill.path ? t(`ability.skills.${skill.path}`) : skill.name }}
          </MasterySkill>
        </OnAppear>
      </OnAppear>
    </div>
  </FullPage>
</template>

<style lang="scss">
.page-ability {
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    padding: 2rem 1rem;
    max-width: 800px;

    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1.25rem;

    color: #fff;
  }

  .mastery {
    font-size: 1.5rem;
    letter-spacing: 0.5em;
  }

  .mastery-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    column-gap: 0.5rem;
    row-gap: 0.5rem;

  }

  .from-right {
    &-enter-from {
      opacity: 0;
      transform: translateX(1rem) translateZ(0);
    }

    &-enter-active {
      transition: all 500ms ease-out;
    }
  }
}
</style>
