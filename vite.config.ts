import { fileURLToPath, URL } from 'node:url'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5177
  },
  plugins: [vue(), createHtmlPlugin({
    minify: true,
    template: './index.html',
    inject: {
      data: {
        title: packageJson.name
      }
    }
  }), viteSingleFile()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
