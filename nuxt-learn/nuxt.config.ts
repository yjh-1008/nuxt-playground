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
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/reset.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  
  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
  
    // server
  
    // env
},




})
