/* eslint-disable */

import { resolve } from 'path'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  build: {
    brotliSize: false,
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'index.html'),
        '404': resolve(__dirname, '404/index.html')
      }
    }
  }
}

export default config