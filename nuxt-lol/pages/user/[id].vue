<template>
  <div>
    유저 정보 페이지
  </div>
</template>

<script lang="ts" setup>
import {useAsyncData} from 'nuxt/app';
import {useRoute} from 'vue-router';
const route = useRoute();
const {id} = route.params;

const { data:userData, pending, error, refresh } = await useAsyncData(
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