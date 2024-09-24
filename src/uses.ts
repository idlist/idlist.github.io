import { useStorage } from '@vueuse/core'
import type { Locales } from './types'

export const useLocaleStorage = () => {
  const browserLocale = navigator.language
  const defaultLocale = browserLocale.split('-')[0].toLowerCase() as Locales

  return useStorage<Locales>('locale', defaultLocale)
}
