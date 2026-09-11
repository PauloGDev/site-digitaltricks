import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { renderSeo } from './scripts/seo-html.mjs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), { name: 'site-seo', transformIndexHtml: html => html.replace('<!-- seo -->', renderSeo('/')) }],
})
