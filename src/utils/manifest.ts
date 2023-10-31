import { type ManifestOptions } from 'vite-plugin-pwa'
import config from '../config/config.json'

export const manifest: Partial<ManifestOptions> = {
  name: config.site.title,
  short_name: config.site.title,
  description: config.site.description,
  theme_color: '#000000',
  background_color: '#111826',
  display: 'standalone',
  start_url: '/',
  scope: '/',
  lang: 'ES',
  icons: [
    {
      src: '/favicons/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/favicons/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png'
    },
    {
      src: '/favicons/android-chrome-512x512.png',
      sizes: '256x256',
      type: 'image/png',
      purpose: 'any maskable'
    }
  ]
}
