<template>
  <div style="display: grid;width: 100%; grid-template-columns: 250px 1fr;">
    <div class="skin-slider">
      <ClientOnly>
      <font-awesome-icon @click="onPrev" class="left-arrow-btn" icon="fa-chevron-left" />
    </ClientOnly>

    <img :src="`${DEFAULT_SKIN_URI}/${champ1?.id}_${skinIdx.num}.jpg`" lazy />
    <ClientOnly>
      <font-awesome-icon class="right-arrow-btn" icon="fa-chevron-right" @click="onNext"/>
    </ClientOnly>
    </div>
    <div v-if="champ1">
      <div class="title">{{ champ1.name }}</div>
      <template v-for="spell in champ1.spells">
        <img :src="`${DEFAULT_SPELL_URI}/${spell.id}.png`" lazy />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ChampInfoJSON, Champion } from '~/utils/types/champions';

const props = withDefaults(defineProps<{
  champ?: Champion,
}>(), {
  champ: undefined,
})

const champImgURI = ref<string>();
const champ1 = ref<Champion>();
const skinIdx = ref<{idx:number, num:number}>({
  idx:0,
  num:0,
});
const DEFAULT_SKIN_URI = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading'
const DEFAULT_SPELL_URI = 'https://ddragon.leagueoflegends.com/cdn/14.9.1/img/spell';
watch(() => props.champ, async (cur:Champion | undefined) => {
  if(typeof cur !== undefined) {
   
    if(cur !== undefined) {
      champImgURI.value = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${cur.id}_0.jpg`
      const response = await $fetch(`https://ddragon.leagueoflegends.com/cdn/14.9.1/data/ko_KR/champion/${cur.id}.json`) as any;
      champ1.value = response.data[cur.id];
      console.log(champ1.value);
      if(champ1.value && champ1.value.skins !== undefined) {
        skinIdx.value = {
          idx: 0,
          num: champ1.value.skins[0].num
        }
      }
      
    }  
  }
})

const onPrev = () => {
  if(champ1.value == undefined || champ1.value.skins === undefined) return;

  if(skinIdx.value.idx-1 < 0) {
    skinIdx.value.idx = champ1.value.skins.length-1;
    skinIdx.value.num = champ1.value.skins[champ1.value.skins.length-1].num;
  } else {
    skinIdx.value.idx -= 1;
    skinIdx.value.num = champ1.value.skins[skinIdx.value.idx].num;
  }
}

const onNext = () => {
  if(champ1.value == undefined || champ1.value.skins === undefined) return;

  if(skinIdx.value.idx+1 === champ1.value.skins.length) {
    skinIdx.value.idx = 0;
    console.log(champ1.value.skins);
    skinIdx.value.num = champ1.value.skins[skinIdx.value.idx].num;
  } else {
    skinIdx.value.idx += 1;
    skinIdx.value.num = champ1.value.skins[skinIdx.value.idx].num;
  }
}

</script>

<style scoped lang="scss">
/* div {
  height: 100%;
  width: 300px;
  div {
    position: relative;
    height: 100%;
    .name {
      background-color: gray;
      color: white;
      position : absolute;
      bottom : 0;
    }
  }
} */

.skin-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  img {
    width: 200px;
  }
  .left-arrow-btn {
    width: 30px;
    height:30px;
    color: white;
  }

  .right-arrow-btn {
    width: 30px;
    height:30px;
    color: white;
  }
}

.title{
  color: white;
  font-size: 1.5rem;
  font-weight: 900; 
  text-align: center;
  flex-grow:3;
}
</style>