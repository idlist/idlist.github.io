import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'

const __dirname = (path: string) => fileURLToPath(new URL(path, import.meta.url))

const manualChunks = (id: string) => {
  if (id.includes('node_modules')) {
    return 'vendor'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': __dirname('./src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer,
      ],
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
})
