// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true,
  },
  css: ['@/assets/css/basic_set.css','@fortawesome/fontawesome-svg-core/styles.css'],
  modules: ['@pinia/nuxt'],
  routeRules: {
    '/api/**' :{cors: true},
  },
  nitro: {
    devProxy: {
      "/api/champ": {
        target: "https://ddragon.leagueoflegends.com/cdn/14.2.1/data/ko_KR/champion.json",
        changeOrigin: true,
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.LOL_API_KEY,
      docURL: process.env.LOL_DOC_URL,
    },
  },
})
