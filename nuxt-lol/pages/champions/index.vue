<template>
  <div>
    <div class="champion-container">
      <template v-for="champ in data" :key="champ.id">
      <ChampionInfo :info="champ"></ChampionInfo>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {type ChampInfoJSON, type Champion} from '@/utils/types/champions';
const config = useRuntimeConfig()
const champSort = (a:Champion, b:Champion) => {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
};

const {data , error, refresh, status} = await useAsyncData<Champion[]>('champions',
 async ():Promise<any[]> => {
  const response:any = await $fetch("https://ddragon.leagueoflegends.com/cdn/14.2.1/data/ko_KR/champion.json");
  const data:ChampInfoJSON= response?.data;
  const names=Object.entries(data).map(v => v[1]).map(d => d.name);
  const newData:Champion[] = Object.entries(data).map(v => v[1])
  return newData.sort((a: Champion, b:Champion) => champSort(a, b));
 },
)

// const filterData = computed(() => {
//   if(data.value === null) return [];
// })
// const champion = ref<Champion | undefined>(data.value?.data);

</script>

<style>
.champion-container {
  border:1px solid black;
  background-color: #31313C;
  overflow-y: auto;
  width: 500px;
  height: 50vh;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
}
</style>