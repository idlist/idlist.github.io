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
        main: resolve(__dirname, 'pages/index.html'),
        test: resolve(__dirname, 'pages/test/index.html')
      }
    }
  }
}

export default config