import { useStorage } from '@vueuse/core'
import type { SupportedLocale } from '@/main'

export const useLocaleStorage = () => {
  const browserLocale = navigator.language
  const defaultLocale = browserLocale.split('-')[0].toLowerCase() as SupportedLocale

  return useStorage<SupportedLocale>('locale', defaultLocale)
}
