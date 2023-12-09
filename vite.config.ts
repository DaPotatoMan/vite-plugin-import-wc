import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import plugin from './src'

export default defineConfig({
  plugins: [
    vue(),
    plugin(),
  ],

  test: {
    globals: true,
    environment: 'jsdom'
  },
})