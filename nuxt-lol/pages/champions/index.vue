<template>
  <div class="champion-view">
    <PositionSelector v-model="position" />
    <div class="champ-wrapper">
      <ClientOnly>
        <div class="champion-container">
          <template v-for="champ in filterData" :key="champ.id">
            <ChampionInfo @click="onChampClick(champ)" :info="champ"></ChampionInfo>
          </template>
        </div>
      </ClientOnly>
    
      <div class="detail_champ_info">
          <ChampCard v-show="selectChamp" :champ="selectChamp" />
          <EmptyChampCard v-show="!selectChamp"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {type ChampInfoJSON, type Champion} from '@/utils/types/champions';
import Champ  from '@/assets/data/champion';
import type ChampionInfo from '~/components/ChampionInfo.vue';
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

type PosRecord = Record<string, string[]>;

const positionTags:PosRecord = {
  '탑' : ["Fighter", 'Tank'],
  '정글' :  ["Assassin", 'Mage','Tank'],
  '미드' : ['Mage','Assasin'],
  '바텀': ["Marksman"],
  '서폿' : ["Support"]
}
const selectChamp = ref<Champion>();

const onChampClick = (champ:Champion) => {
  selectChamp.value = champ;
}

const position = ref<string>('전체');

watch(position,(cur:string) => {
  if(cur === '전체') {
    filterData.value = champs.value;
    return;
  }
  const tags:string[] = positionTags[cur];
  filterData.value = champs.value?.filter((item:Champion) => {
    for(let i=0;i<item.tags.length;i++) {
      const t:string = item.tags[i];
      if(tags.includes(t)) return item; 
    }
  })
})

const config = useRuntimeConfig();
const champSort = (a:Champion, b:Champion) => {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
};
const filterData = ref<any>(Object.entries(Champ.data).map(item => item[1]));
const {data:champs, error, refresh, status} = await useAsyncData<Champion[]>('champions',
 async ():Promise<any[]> => {
  const response:any = await $fetch("https://ddragon.leagueoflegends.com/cdn/14.2.1/data/ko_KR/champion.json");
  const data:ChampInfoJSON= response?.data;
  const names=Object.entries(data).map(v => v[1]).map(d => d.name);
  const newData:Champion[] = Object.entries(data).map(v => v[1])
  // filterData.value = Object.entries(Champ.data).map(item => item[1]);
  return newData.sort((a: Champion, b:Champion) => champSort(a, b));
 },
)



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
  background-color: #28344E;
  padding: 30px 10%;
  display: grid;
}
.champion-container {
  display: flex;
  border:1px solid black;
  background-color: #31313C;
  overflow-y: auto;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  margin-right: 20px;
  /* ove
  rflow-x: hidden; */
}

.champ-wrapper {
  display: grid;  
  grid-template-rows: 40vh;
  grid-template-columns: 400px 1fr;
}

.detail_champ_info {
  border: 1px solid black;
  padding: 10px;
}
</style>