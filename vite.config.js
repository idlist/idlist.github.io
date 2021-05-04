/* eslint-disable */

import { resolve } from 'path'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  server: {
    port: '14514'
  },
  build: {
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'index.html'),
        '404': resolve(__dirname, '404/index.html')
      },
      output: {
        manualChunks: {
          mithril: ['mithril'],
          popmotion: ['popmotion']
        }
      }
    },
  },
  esbuild: {
    jsxFactory: 'm',
    jsxFragment: 'm.Fragment'
  }
}

export default config