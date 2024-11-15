<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FullPage from '@/components/background/FullPage.vue'
import BgInvert from '@/components/background/BgInvert.vue'
import MasteryCategory, { type MasteryCategoryProps } from './MasteryCategory.vue'
import MasterySkill, { type MasterySkillProps } from './MasterySkill.vue'

import icon_JavaScript from '@/assets/svgrepo/javascript.svg'
import icon_TypeScript from '@/assets/svgrepo/typescript.svg'
import icon_Dart from '@/assets/svgrepo/dart.svg'
import icon_CSharp from '@/assets/svgrepo/csharp.svg'
import icon_Cpp from '@/assets/svgrepo/cpp.svg'
import icon_Rust from '@/assets/svgrepo/rust.svg'
import icon_React from '@/assets/svgrepo/react.svg'
import icon_Vue from '@/assets/svgrepo/vue.svg'
import icon_Sass from '@/assets/svgrepo/sass.svg'
import icon_Nodejs from '@/assets/svgrepo/nodejs.svg'
import icon_Vite from '@/assets/icon/vite.svg'
import icon_Fastify from '@/assets/svgrepo/fastify.svg'
import icon_Flutter from '@/assets/svgrepo/flutter.svg'
import icon_Godot from '@/assets/svgrepo/godot.svg'
import icon_Krita from '@/assets/svgrepo/krita.svg'
import icon_AffinityDesigner from '@/assets/svgrepo/affinity_designer.svg'
import icon_AbletonLive from '@/assets/icon/live.svg'
import icon_Electron from '@/assets/svgrepo/electron.svg'
import icon_Tauri from '@/assets/icon/tauri.svg'

const { t } = useI18n()

interface MasteryItem extends MasterySkillProps {
  path?: string
}

interface MasteryList extends MasteryCategoryProps {
  path: string
  skills: MasteryItem[]
}

const masteries: MasteryList[] = [
  {
    path: 'language',
    color: 'var(--color-language)',
    skills: [
      {
        path: 'chinese',
        star: true,
      },
      {
        path: 'english',
        desc: 'IELTS 7.0',
        star: true,
      },
      {
        // icon: icon_Japanese,
        path: 'japanese',
        desc: 'JLPT N1',
      },
    ],
  },
  {
    path: 'pl',
    color: 'var(--color-pl)',
    skills: [
      {
        icon: icon_JavaScript,
        name: 'JavaScript',
        link: 'https://tc39.es/',
        star: true,
      },
      {
        icon: icon_TypeScript,
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        star: true,
      },
      {
        icon: icon_Dart,
        name: 'Dart',
        link: 'https://dart.dev/',
      },
      {
        icon: icon_Rust,
        name: 'Rust',
        link: 'https://www.rust-lang.org/',
      },
      {
        icon: icon_Cpp,
        name: 'C++',
        link: 'https://isocpp.org/',
      },
      {
        icon: icon_CSharp,
        name: 'C#',
        link: 'https://dotnet.microsoft.com/en-us/languages/csharp',
      },
    ],
  },
  {
    path: 'web',
    color: 'var(--color-frontend)',
    skills: [
      {
        icon: icon_React,
        name: 'React',
        link: 'https://react.dev/',
      },
      {
        icon: icon_Vue,
        name: 'Vue',
        link: 'https://vuejs.org/',
        star: true,
      },
      {
        icon: icon_Sass,
        name: 'Sass',
        link: 'https://sass-lang.com/guide/',
        star: true,
      },
      {
        icon: icon_Nodejs,
        name: 'Node.js',
        link: 'https://nodejs.org/en',
      },
      {
        icon: icon_Vite,
        name: 'Vite',
        link: 'https://sass-lang.com/guide/',
        star: true,
      },
      {
        icon: icon_Fastify,
        name: 'Fastify',
        link: 'https://fastify.dev/',
      },
    ],
  },
  {
    path: 'desktop',
    color: 'var(--color-desktop)',
    skills: [
      {
        icon: icon_Electron,
        name: 'Electron',
        link: 'https://www.electronjs.org/',
      },
      {
        icon: icon_Tauri,
        name: 'Tauri',
        link: 'https://v2.tauri.app/',
      },
      {
        icon: icon_Flutter,
        name: 'Flutter',
        link: 'https://flutter.dev/',
      },
    ],
  },
  {
    path: 'gamedev',
    color: 'var(--color-design)',
    skills: [
      {
        icon: icon_Godot,
        name: 'Godot',
        link: 'https://godotengine.org/',
      },
    ],
  },
  {
    path: 'art',
    color: 'var(--color-art)',
    skills: [
      {
        icon: icon_Krita,
        name: 'Krita',
        link: 'https://krita.org/en/',
      },
      {
        icon: icon_AffinityDesigner,
        name: 'Affinity Designer',
        link: 'https://affinity.serif.com/en-us/designer/',
      },
    ],
  },
  {
    path: 'compose',
    color: 'var(--color-compose)',
    skills: [
      {
        icon: icon_AbletonLive,
        name: 'Ableton Live',
        link: 'https://www.ableton.com/en/live/',
      },
    ],
  },
]
</script>

<template>
  <FullPage :background="BgInvert" class="page-ability">
    <div class="container">
      <h2 class="static mastery">{{ t('ability.mastery') }}</h2>
      <div v-for="mastery of masteries" :key="mastery.path" class="mastery-list">
        <MasteryCategory :color="mastery.color">
          {{ t(`ability.masteries.${mastery.path}`) }}
        </MasteryCategory>
        <MasterySkill v-for="skill of mastery.skills" :key="skill.path" v-bind="skill">
          {{ skill.path ? t(`ability.skills.${skill.path}`) : skill.name }}
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
    padding: 1rem 2rem;
    max-width: 800px;

    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;

    color: #fff;
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
    justify-content: start;
    column-gap: 0.5rem;
    row-gap: 0.5rem;
  }
}
</style>
