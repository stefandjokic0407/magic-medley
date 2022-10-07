import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // NOTE this is how we got vite to build the faumi map library correctly
  optimizeDeps: {
    include: ['fast-deep-equal'],
  },
  build: {
    outDir: 'Capstone-MTG-Medley\client',
    sourcemap: false,
  },
  server: {
    port: 8080
  }
})
