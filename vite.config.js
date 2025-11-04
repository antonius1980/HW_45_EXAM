import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use "/" in dev and "/HW_45_EXAM/" for production build (GH Pages)
  base: command === 'build' ? '/HW_45_EXAM/' : '/',
resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), //ex: "@/scss/..."
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/scss/_vars.scss" as *;
          @use "@/scss/_mixins.scss" as *;
        `
      },
    },
  },
}))
