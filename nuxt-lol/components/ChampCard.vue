<template>
  <div style="display: grid;width: 100%; grid-template-columns: 250px 1fr;">
    <div class="skin-slider">
      <ClientOnly>
      <font-awesome-icon @click="onPrev" class="left-arrow-btn" icon="fa-chevron-left" />
    </ClientOnly>

    <div class="skin-wrapper">
      <img :src="`${DEFAULT_SKIN_URI}/${champ1?.id}_${skinIdx.num}.jpg`" lazy />
      <div class="name" v-if="champ1 && champ1.skins !== undefined">
        {{ champ1.skins[skinIdx.idx].name === 'default' ? champ1.name : champ1.skins[skinIdx.idx].name  }}
      </div>
    </div>
    <ClientOnly>
      <font-awesome-icon class="right-arrow-btn" icon="fa-chevron-right" @click="onNext"/>
    </ClientOnly>
    </div>
    <div class="champ-info" v-if="champ1">
      <div class="title">{{ champ1.name }}</div>
      <div class="skill-wrapper">
        <img :src="`${DEFAULT_PASSIVE_URI}/${champ1.passive.image.full}`" lazy @mouseover="onSkillOver(champ1.passive)" @mouseleave="champTooltipState=false" />
        <template v-for="spell in champ1.spells">
          <img :src="`${DEFAULT_SPELL_URI}/${spell.id}.png`" lazy @mouseover="onSkillOver(spell)" @mouseleave="champTooltipState=false" />
        </template>
        <ChampTooltip v-if="champTooltipState" :info="champSpellInfo" />
      </div>
      <div class="tip-container" v-if="champ1.allytips.length && champ1.enemytips.length">
        <div>
          <div>챔피언 팁</div>
          <template v-for="tip in champ1.allytips" :key="tip">
             <div>{{ tip }}</div>
          </template>
        </div>
        <div style="margin-right: 10px;">
          <div>챔피언 상대할때 팁</div>
          <template v-for="tip in champ1.enemytips" :key="tip">
             <div>{{ tip }}</div>
          </template>
        </div>
      </div>
      <div class="champ-stroy">{{ champ?.blurb }}</div>

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
const champSpellInfo = ref();
const champTooltipState = ref<boolean>(false);
const onSkillOver = (item: Object) => {
  champSpellInfo.value= item;
  champTooltipState.value = true;
}
const DEFAULT_SKIN_URI = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading'
const DEFAULT_SPELL_URI = 'https://ddragon.leagueoflegends.com/cdn/14.9.1/img/spell';
const DEFAULT_PASSIVE_URI = 'https://ddragon.leagueoflegends.com/cdn/14.9.1/img/passive';
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

.skin-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 100%;
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

.champ-info{
  img {
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }
  .skill-wrapper {
    position: relative;
  }
  .champ-stroy {
    background-color: #31313C;
    color: white;
    min-height: 120px;
    padding: 10px;
  }
  .tip-container {
    display: flex;
    width: 100%;
    padding: 10px;
    color: white;
    gap: 20px;
    justify-content: center;
    align-items: center;
    >   div {
      background-color: #31313C;
      height: 150px;

      padding: 10px;
      flex-grow: 1;
    }

  }
}

.skin-wrapper {
  position: relative;
  .name {
    position: absolute;
    bottom: 0;
    opacity: 0.7;
    width: 100%;
    background-color: black;
    text-align: center;
    color: white;
    font-weight: 700;
    padding-block: 5px;
    border-radius: 5px;
  }
}


</style>