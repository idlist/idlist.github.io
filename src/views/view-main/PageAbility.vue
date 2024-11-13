<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FullPage from '@/components/background/FullPage.vue'
import BgInvert from '@/components/background/BgInvert.vue'
import MasteryCategory, { type MasteryCategoryProps } from './MasteryCategory.vue'
import MasterySkill, { type MasterySkillProps } from './MasterySkill.vue'

const { t } = useI18n()

interface MasteryItem extends MasterySkillProps {
  name: string
}

interface MasteryList extends MasteryCategoryProps {
  name: string
  skills: MasteryItem[]
}

const masteries: MasteryList[] = [
  {
    name: 'language',
    color: 'var(--color-language)',
    skills: [],
  },
]
</script>

<template>
  <FullPage :background="BgInvert" position="above" class="page-ability">
    <div class="container">
      <h2 class="static mastery">{{ t('ability.mastery') }}</h2>
      <div v-for="mastery of masteries" :key="mastery.name" :color="mastery.color" class="mastery-list">
        <MasteryCategory color="var(--color-language)">
          {{ t(`ability.masteries.${mastery.name}`) }}
        </MasteryCategory>
        <MasterySkill v-for="skill of mastery.skills" :key="skill.name" v-bind="skill">
          {{ t(`ability.skills.${skill.name}`) }}
        </MasterySkill>
      </div>
    </div>
  </FullPage>
</template>

<style lang="scss">
.page-ability {
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    justify-items: center;

    color: white;
  }

  .mastery {
    font-size: 1.5rem;
    letter-spacing: 0.5em;
    transform: translateX(0.25em);
  }

  .mastery-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
</style>
