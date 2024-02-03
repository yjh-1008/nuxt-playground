<template>
  <div class="app">
    <main class="main">
      <CommonInput v-model="searchText" @on-search="onSearch"/>
      <button @click="onSearch" >검색</button>
    </main>

  </div>
</template>

<script setup lang="ts">
import { useAsyncData, useRuntimeConfig } from 'nuxt/app';
// import axios from "axios";
import CommonInput from '@/components/CommonInput.vue';
import useApi from "@/utils/composables/useApi";
import axios from 'axios';
const route = useRoute();
const router= useRouter();
// import { getUserInfoByName } from '@/server/api/summoner';
// import rotations from "@/server/api/champions";
// const { data, pending, error, refresh, status } = await useApi(`platform/v3/champion-rotations`);
// platform/v3/champion-rotations?api_key=RGAPI-94d60f63-c25e-4698-9c2d-c4880145c452;
// const { data, pending, error, refresh } = await useFetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',{
// })
const searchText = ref<string>('');


const onSearch = async() => {
  // router.push(`/summoner/kr/${searchText.value}`);
  // const response = await axios.get(`https://developer.riotgames.com/apis#account-v1/`)
  // const response = await useApi(`summoner/v4/summoners/by-name/${searchText.value}-`);
  const response = await useApi('summoner/v4/summoners/by-name/hide on bush')
  console.log(response);
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
}
</style>