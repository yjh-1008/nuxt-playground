<template>
  <div class="champion-view">
    <form>
      <CommonInput v-model="searchText" placeholder="챔피언 명을 입력해주세요." />
      <div class="champion-container">
        <template v-for="champ in filterData" :key="champ.id">
        <ChampionInfo :info="champ"></ChampionInfo>
        </template>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import {type ChampInfoJSON, type Champion} from '@/utils/types/champions';
import CommonInput from '~/components/CommonInput.vue';
const config = useRuntimeConfig();
const champSort = (a:Champion, b:Champion) => {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
};

const {data, error, refresh, status} = await useAsyncData<Champion[]>('champions',
 async ():Promise<any[]> => {
  const response:any = await $fetch("https://ddragon.leagueoflegends.com/cdn/14.2.1/data/ko_KR/champion.json");
  const data:ChampInfoJSON= response?.data;
  const names=Object.entries(data).map(v => v[1]).map(d => d.name);
  const newData:Champion[] = Object.entries(data).map(v => v[1])
  return newData.sort((a: Champion, b:Champion) => champSort(a, b));
 },
)

const filterData = computed<any>(() => {
  console.log(data.value);
  if(searchText.value === '') return data.value;
  return data.value?.filter((c:Champion) => c?.name.includes(searchText.value));
})

const searchText = ref<string>('');
const onSearch = () => {
  
}
</script>

<style>
.champion-view {

  padding: 0 20%;
}
.champion-container {
  display: flex;
  border:1px solid black;
  background-color: #31313C;
  overflow-y: auto;
  width: 500px;
  height: 50vh;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
  /* overflow-x: hidden; */
}
</style>