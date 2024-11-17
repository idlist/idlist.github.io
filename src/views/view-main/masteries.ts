import { type MasteryCategoryProps } from './MasteryCategory.vue'
import { type MasterySkillProps } from './MasterySkill.vue'

import icon_Chinese from '@/assets/byme/chinese.svg'
import icon_English from '@/assets/byme/english.svg'
import icon_Japanese from '@/assets/byme/japanese.svg'

import icon_JavaScript from '@/assets/svgrepo/javascript.svg'
import icon_TypeScript from '@/assets/svgrepo/typescript.svg'
import icon_Dart from '@/assets/svgrepo/dart.svg'
import icon_Rust from '@/assets/svgrepo/rust.svg'
import icon_Cpp from '@/assets/svgrepo/cpp.svg'
import icon_CSharp from '@/assets/svgrepo/csharp.svg'

import icon_React from '@/assets/svgrepo/react.svg'
import icon_Vue from '@/assets/svgrepo/vue.svg'
import icon_Sass from '@/assets/svgrepo/sass.svg'
import icon_Nodejs from '@/assets/svgrepo/nodejs.svg'
import icon_Vite from '@/assets/icon/vite.svg'
import icon_Fastify from '@/assets/svgrepo/fastify.svg'

import icon_Electron from '@/assets/svgrepo/electron.svg'
import icon_Tauri from '@/assets/icon/tauri.svg'
import icon_Flutter from '@/assets/svgrepo/flutter.svg'

import icon_Godot from '@/assets/svgrepo/godot.svg'

import icon_Krita from '@/assets/svgrepo/krita.svg'
import icon_AffinityDesigner from '@/assets/svgrepo/affinity_designer.svg'

import icon_AbletonLive from '@/assets/icon/live.svg'

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
        icon: icon_Chinese,
        path: 'chinese',
        star: true,
      },
      {
        icon: icon_English,
        path: 'english',
        desc: 'IELTS 7.0',
        star: true,
      },
      {
        icon: icon_Japanese,
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
        fav: true,
      },
    ],
  },
  {
    path: 'art',
    color: 'var(--color-art)',
    skills: [
      {
        icon: icon_AffinityDesigner,
        name: 'Affinity Designer',
        link: 'https://affinity.serif.com/en-us/designer/',
      },
      {
        icon: icon_Krita,
        name: 'Krita',
        link: 'https://krita.org/en/',
        fav: true,
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

export default masteries
