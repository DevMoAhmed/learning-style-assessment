import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base works both at the Firebase Hosting root (englishboard.web.app)
  // and under the GitHub Pages subpath (/learning-style-assessment/).
  base: './',
})
