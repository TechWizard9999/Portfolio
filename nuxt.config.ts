export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      'Space Grotesk': [400, 500, 600, 700],
      'Inter': [400, 500, 600, 700],
      'JetBrains Mono': [400, 500, 600]
    },
    display: 'swap',
    preload: true,
    prefetch: true
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },

  app: {
    head: {
      title: 'Roopesh S | Software Engineer at Microsoft',
      meta: [
        { name: 'description', content: 'Roopesh S is a software engineer at Microsoft building developer tools, automation, and scalable software.' },
        { name: 'theme-color', content: '#0d1117' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Roopesh S | Software Engineer at Microsoft' },
        { property: 'og:description', content: 'Software engineer building developer tools, automation, and scalable software.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },

  experimental: {
    payloadExtraction: true
  },

  nitro: {
    compressPublicAssets: true
  }
})
