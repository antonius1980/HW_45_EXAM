import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use "/" in dev and "/HW_45_EXAM/" for production build (GH Pages)
  base: command === 'build' ? '/HW_45_EXAM/' : '/',
}))
