import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import Compress from 'astro-compress'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import partytown from '@astrojs/partytown'
import { VitePWA } from 'vite-plugin-pwa'
import { manifest } from './src/utils/manifest'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.francocarballar.com/',
  image: {
    remotePatterns: [
      {
        protocol: 'https'
      }
    ]
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
  integrations: [
    Compress(),
    sitemap(),
    tailwind(),
    robotsTxt(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest,
        workbox: {
          globDirectory: 'dist',
          globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
          navigateFallback: null
        }
      })
    ]
  }
})
