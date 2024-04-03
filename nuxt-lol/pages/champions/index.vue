<template>
  <div class="champion-view">
      <CommonInput v-model="searchText" placeholder="챔피언 명을 입력해주세요." />
    <div class="champ-wrapper">
      <div class="champion-container">
        <template v-for="champ in filterData" :key="champ.id">
        <ChampionInfo :info="champ" @onClick="detailChampInfo"></ChampionInfo>
        </template>
      </div>
      <div class="detail_champ_info">
        디테일한 챔피언 정보
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {type ChampInfoJSON, type Champion} from '@/utils/types/champions';
import CommonInput from '~/components/CommonInput.vue';
class Skill {
  q: string;
  w: string;
  e: string;
  r: string;
  constructor(p:string, q: string, w:string, e:string, r:string) {
    this.q= q;
    this.e = e;
    this.w= w;
    this.r =r;
  }
}
interface SkillInfo {
  readonly url: string,
  readonly description: string,
}

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
  if(searchText.value === '') return data.value;
  return data.value?.filter((c:Champion) => c?.name.includes(searchText.value));
})

const searchText = ref<string>('');
const onSearch = () => {
  
}

const detailChampInfo = async () => {
  try {
    const {data}:any = await $fetch(`https://ddragon.leagueoflegends.com/cdn/14.2.1/data/ko_KR/champion/Garen.json`);
    console.log(data);
    // champInfo.value = data[`${route.params.id}`];
    // imageURL.value = `https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champInfo.value?.image.full}`;

    // skills.value = champInfo.value?.spells.map(v => {
    //   // if(v.image === n) return;
    //   const images: Image = v.image;
    //   return {
    //     url: `${runtimeConfig.public.docURL}img/spell/${v.image.full}`,
    //     description: v.description,
    //   }
    // })
  } catch(err) {
    console.log(err);
  }
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
  /* ove
  rflow-x: hidden; */
}

.champ-wrapper {
  display: flex;
}

.detail_champ_info {
  width: 500px;
  height: 50vh;
  border: 1px solid black;
}
</style>