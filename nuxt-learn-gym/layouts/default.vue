<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>Vue Master Course</q-toolbar-title>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" to="/" custom>
          <q-btn no-caps stretch flat label="Home" @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink custom>
          <q-btn no-caps stretch flat label="Youtube" @click="moveYouTube" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" to="/admin" custom>
          <q-btn no-caps stretch flat label="Admin" @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" to="/about" custom>
          <q-btn no-caps stretch flat label="About" @click="navigate" />
        </NuxtLink>
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));

const moveYouTube = async () => {
  await navigateTo('https://www.youtube.com/', {
    external: true,
  });
};
</script>
