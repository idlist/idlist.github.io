import './main.scss'
import './utils.scss'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import { useLocaleStorage } from './uses'

import en, { type LocaleSchema } from './locales/en'
import zh from './locales/zh'
import ja from './locales/ja'
import type { Locales } from './types'

const localeStore = useLocaleStorage()

const i18n = createI18n<LocaleSchema, Locales>({
  legacy: false,
  locale: localeStore.value,
  fallbackLocale: 'en',
  messages: { en, zh, ja },
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
