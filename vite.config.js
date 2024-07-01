import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import ImageMinifierPlugin from './ImageMinifierPlugin'

import { jumbotron } from './layout.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    ImageMinifierPlugin([
      {
        inputPath: './src/assets/images',
        outputPath: './dist/assets/images',
        recursive: true,
        options: {
          width: 512
        }
      },
      {
        inputPath: './src/' + jumbotron,
        outputPath: './dist/assets/images/jumbotron.png',
        options: {
          width: 1920
        }
      },
    ])
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url))
    }
  }
})
