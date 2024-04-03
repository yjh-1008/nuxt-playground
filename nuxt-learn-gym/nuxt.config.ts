// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: true,
    typeCheck: true,
  },
  modules: ['nuxt-quasar-ui'],
  quasar: {
    /* */
  },
});
