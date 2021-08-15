export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'movie-app-nuxt',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt Movie App' },
      { hid: 'og:title', property: 'og:title', content: 'Movie App / Search' },
      { hid: 'og:description', property: 'og:description', content: 'The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.' },
      { hid: 'og:image', property: 'og:image', content: 'https://heropy.blog/css/images/logo.png' },
      { hid: 'og:url', property: 'og:url', content: process.env.CLIENT_URL }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@400;700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],

  // @nuxtjs/style-resources
  styleResources: {
    scss: [
      '~/scss/main.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-transform-runtime']  
      ]
    },
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  },

  serverMiddleware: [
    {
      path: '/api/movie',
      // path: '/.netlify/functions/movie',
      handler: '~/server-middleware/movie.js'
    }
  ]
}
