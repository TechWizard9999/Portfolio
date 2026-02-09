export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      'Cinzel': [400, 700],
      'Cinzel Decorative': [400, 700],
      'Inter': [400, 500, 600]
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
      title: 'Roopesh S | Software Engineer',
      meta: [
        { name: 'description', content: 'Software Engineer. Building scalable applications.' },
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

