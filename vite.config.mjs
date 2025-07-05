// vite.config.mjs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio-website/', // 👈 Must match repo name exactly
  plugins: [react()],
})
