import 'normalize.css'
import './main.scss'
import './utils/common.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import { useLocaleStorage } from './utils/uses'

import en, { type LocaleSchema } from './locales/en'
import zh from './locales/zh'

export type SupportedLocale = 'en' | 'zh'

const localeStore = useLocaleStorage()

const i18n = createI18n<LocaleSchema, SupportedLocale>({
  legacy: false,
  locale: localeStore.value,
  fallbackLocale: 'en',
  messages: { en, zh },
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
