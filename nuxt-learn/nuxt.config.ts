const isProduction = process.env.NODE_ENV === 'production'
export default defineNuxtConfig({
  devtools: { enabled: true,  head: {
    title: 'learn-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  }, 
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],
  server: {
    port: isProduction ? null : 4000,
  },
  env: {
    baseURL: isProduction
      ? 'https://my-json-server.typicode.com/joshua1988/nuxt-shopping-api'
      : 'http://localhost:3000',
  },
  css: ['@/assets/css/reset.css'],
  plugins: [],
  components: true,
  rootRules: {
    '/*': {prerender: true},
  },
},

modules: [
  '@pinia/nuxt',
],

})
