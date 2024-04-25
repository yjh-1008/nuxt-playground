<template>
  <NuxtLayout>
    <!-- :name="layoutName" -->
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const title = ref('vue & Nuxt class');
const description = ref('nuxt 강의');
useHead({
  title,
  meta: [{ name: 'description', content: description }],
});
// import type { LayoutKey } from '#build/types/layouts';
// const layoutName = ref<LayoutKey>('default');
// const nuxtApp = useNuxtApp();
// nuxtApp.provide('hello', (msg: string) => `Hello ${msg}`);
</script>
