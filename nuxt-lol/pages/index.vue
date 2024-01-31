<template>
  <div class="app">

  </div>
</template>

<script setup lang="ts">
import { useAsyncData, useRuntimeConfig } from 'nuxt/app';
import useApi from "@/utils/composables/useApi";
// import rotations from "@/server/api/champions";
const { data, pending, error, refresh, status } = await useApi(`platform/v3/champion-rotations`);
// platform/v3/champion-rotations?api_key=RGAPI-94d60f63-c25e-4698-9c2d-c4880145c452;
// const { data, pending, error, refresh } = await useFetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',{

// })
</script>

<style scoped>

</style>~/utils/api/champions~/server/api/champions