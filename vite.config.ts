import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves this project from /portfolio-template/.
export default defineConfig({
  base: '/portfolio-template/',
  plugins: [react()],
})
