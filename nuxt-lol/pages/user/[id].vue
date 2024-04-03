<template>
  <div>
    <img :id="userData?.name" :src="iconUrl" class="profile-icon"/>
    <label :for="userData?.name">{{ userData?.name }} {{ userData?.summonerLevel }}</label>
    유저 정보 페이지
  </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue';
import {useAsyncData} from 'nuxt/app';
import {useRoute} from 'vue-router';
import type Summoner from '@/utils/types/summoner';
const route = useRoute();
const {id} = route.params;






const iconUrl = computed(() => `${config.public.docURL}img/profileicon/${userData.value?.profileIconId}.png`);
const config = useRuntimeConfig();
const { data:userData, pending, error, refresh } = await useAsyncData<Summoner>(
    'profile',
    () => $fetch(`/api/user/profile`,{
      method: 'get',
      query:{id}
    },
  )
);
</script>

<style>

</style>