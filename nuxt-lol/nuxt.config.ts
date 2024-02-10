// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true,
  },
  css: ['@/assets/css/basic_set.css'],
  modules: ['@pinia/nuxt'],
  routeRules: {
    '/api/**' :{cors: true},
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.LOL_API_KEY,
      docURL: process.env.LOL_DOC_URL,
    },
  },
})
