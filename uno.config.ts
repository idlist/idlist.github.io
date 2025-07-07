import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    breakpoints: {
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
    },
  },
})
