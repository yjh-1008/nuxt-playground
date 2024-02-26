<template>
  <div class="app">
    <main class="main">
      <div class="search-container">
        <CommonInput v-model="searchText" @on-search="onSearch" placeholder="소환사 명과 태그를 입력해주세요. ex) hide on bush-KR1"/>
        <!-- <div>{{ data === null? '' : data }}</div> -->
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
import { useAsyncData, useRuntimeConfig } from 'nuxt/app';
import CommonInput from '@/components/CommonInput.vue';
import useApi from "@/utils/composables/useApi";
import {useUserStore} from '@/stores/userStore';
import {createInstance} from '@/utils/riotApis/index';
interface User {
  puuid: string,
  gameName: string,
  tagLIne: string,
}
const runtimeConfig = useRuntimeConfig();
const userStore = useUserStore();
const route = useRoute();
const router= useRouter();
const instance = createInstance('https://asia.api.riotgames.com/riot/');
const searchText = ref<string>('');
const { data:rotation, pending, error, refresh, status } = await useApi(`platform/v3/champion-rotations`);

// const searchText = ref<string>('');


const onSearch = async() => {
  //TODO 이름 규칙 정규표현식
  const [name, tag] = searchText.value.split("-");
  const {data} = await useFetch<User>('/api/user/info',{
    method: 'get',
    query: {
      name,
      tag,
    }
  });
  if(data.value !== null) {
    userStore.setPuuid(data.value.puuid)
    router.push(`/user/${data.value.puuid}`);
  }


}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
}
</style>