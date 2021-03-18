const { resolve } = require('path')

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  root: './pages/',
  build: {
    outDir: './../dist',
    emptyOutDir: true,
    brotliSize: false,
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'pages/index.html'),
        '404': resolve(__dirname, 'pages/404/index.html')
      }
    }
  }
}

export default config