// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true,

  },
  runtimeConfig: {
    public: {
      apiBase: process.env.LOL_API_KEY,
    },
  },
})
