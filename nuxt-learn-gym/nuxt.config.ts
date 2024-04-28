// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: true,
    typeCheck: true,
  },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  quasar: {
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right',
      },
    },
  },
  imports: {
    // presets: [
    //   {
    //     from: 'vue-i18n',
    //     imports: ['useI18n'],
    //   },
    // ],
  },
  app: {
    head: {
      title: 'Nuxt 강의',
      meta: [{ name: 'description', content: 'test' }],
    },
  },
});
