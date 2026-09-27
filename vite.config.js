import { copyFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-portfolio-assets',
      closeBundle() {
        for (const file of ['manifest.json', 'monogram.svg', 'resume.pdf', 'service-worker.js']) {
          copyFileSync(file, `dist/${file}`)
        }
      },
    },
  ],
})
