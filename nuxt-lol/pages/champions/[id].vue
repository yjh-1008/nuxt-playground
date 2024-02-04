<template>
  <div>
    <div class="header" >
      <div class="champ-info-wrapper">
      <img :src="imageURL" class="champ-profile"/>
      <div class="info">
        <div>{{ champInfo?.name }}</div>
        <span>빌드 :</span> <span v-for="tag in champInfo?.tags">{{ tag }}&nbsp;</span>
      </div>
      <img :src="passive" alt="passive" class="skill"/>
      <div v-for="(s,i) in skills" :key="s.url" class="skill-container" @mouseover="onVisible(i)" @mouseleave="onLeave(i)">
        <label :for="s.url" class="dsecription" v-show="visibleDescription[i]">{{ s.description }}</label>
        <img class="skill" :id="s.url" :src="s.url"/>
      </div>
    </div>
    </div>
  
  </div>
</template>

<script setup lang="ts">
import useApi from '~/utils/composables/useApi';
import {type DetailChampInfo, type Image} from '@/utils/types/champions';
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

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const visibleDescription = ref<boolean[]>(new Array(5).fill(false));
const champInfo = ref<DetailChampInfo>();
const skills = ref<SkillInfo[]>();
const passive = computed(() => `${runtimeConfig.public.docURL}img/passive/${champInfo.value?.passive.image.full}`)
// const imageURL = computed(() => `https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champInfo.value?.image.full}`);
const imageURL = ref<string>('');
await useAsyncData('champInfo' , async () => {
  try {
    const {data}:any = await $fetch(`https://ddragon.leagueoflegends.com/cdn/14.2.1/data/ko_KR/champion/${route.params.id}.json`);
    champInfo.value = data[`${route.params.id}`];
    imageURL.value = `https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champInfo.value?.image.full}`;

    skills.value = champInfo.value?.spells.map(v => {
      // if(v.image === n) return;
      const images: Image = v.image;
      return {
        url: `${runtimeConfig.public.docURL}img/spell/${v.image.full}`,
        description: v.description,
      }
    })
  } catch(err) {
    console.log(err);
  }
})



// const {data} = await useAsyncData('champInfo', async () => {
//   const response = await $fetch(`https://ddragon.leagueoflegends.com/cdn/14.2.1/data/ko_KR/champion/${route.params.id}.json`)
// });

const onVisible = (idx: number) => {
  visibleDescription.value[idx] = true;
}

const onLeave = (idx: number) => {
  visibleDescription.value[idx] = false;
}

</script>

<style scoped>
.skills {
  display: flex;
  gap: 20px;
}

.skill {
  width: 50px;
  height: 50px;
}
.header{
  background-color: #31313C;
}
.champ-info-wrapper {
  padding: 1% 0;
  margin: 0 auto;
  width: 500px;
  display: grid;
  grid-template-columns: 130px 50px 50px 50px 50px 50px;
  grid-template-rows: repeat(2, 50px);
  gap: 20px;
  border-bottom: 1px solid black;
}

.champ-profile {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start:1;
  grid-column-end: 2;
}

.info {
  grid-column-start: 2;
  grid-column-end: 7;
}

.info > div {
  font-size: 1.25rem;
}

.info > * {
  color: white;
  padding: 1% 0;
}

.skill-container {
  position: relative;
}

.dsecription {
  position: absolute;
  background-color: gray;
  width: 300px;
  left: 0;
  top: 55px;
  z-index: 90
}

/* .d-flex > img { */
  /* margin: 0 5px; */
/* } */
</style>  