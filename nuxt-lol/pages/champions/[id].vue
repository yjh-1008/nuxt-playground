<template>
  <div>{{ champInfo }}</div>
  <!-- <div>{{ champInfo?.image.full }}</div> -->
  <!-- <div>{{ imageURL }}</div> -->
  <img :src="imageURL" alt="test123" />
</template>

<script setup lang="ts">
import useApi from '~/utils/composables/useApi';
import {type DetailChampInfo} from '@/utils/types/champions';
const route = useRoute();

console.log(route.params);

const champInfo = ref<DetailChampInfo>();
// const imageURL = computed(() => `https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champInfo.value?.image.full}`);
const imageURL = ref<string>('');
await useAsyncData('champInfo' , async () => {
  try {
    const {data}:any = await $fetch(`https://ddragon.leagueoflegends.com/cdn/14.2.1/data/ko_KR/champion/${route.params.id}.json`);
    champInfo.value = data[`${route.params.id}`];
    // console.log(data);
    imageURL.value = `https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champInfo.value?.image.full}`;
    


  } catch(err) {
    console.log(err);
  }
})



// const {data} = await useAsyncData('champInfo', async () => {
//   const response = await $fetch(`https://ddragon.leagueoflegends.com/cdn/14.2.1/data/ko_KR/champion/${route.params.id}.json`)
// });
</script>