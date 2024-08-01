import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SportSee-Dashboard/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/styles/styles.scss';`,
      },
    },
  },
})
