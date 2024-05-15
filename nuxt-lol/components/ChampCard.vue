<template>
  <div class="info_card">
    <div class="skin-slider">
    <ClientOnly>
      <font-awesome-icon @click="onPrev" class="left-arrow-btn" icon="fa-chevron-left" />
    </ClientOnly>

    <div class="skin-wrapper">
      <img :src="`${DEFAULT_SKIN_URI}/${champ1?.id}_${skinIdx.num}.jpg`"/>
      <div class="name" v-if="champ1 && champ1.skins !== undefined">
        {{ champ1.skins[skinIdx.idx].name === 'default' ? champ1.name : champ1.skins[skinIdx.idx].name  }}
      </div>
    </div>
    <ClientOnly>
      <font-awesome-icon class="right-arrow-btn" icon="fa-chevron-right" @click="onNext"/>
    </ClientOnly>
    </div>
    <div class="champ-info" v-if="champ1">
      <div class="title">{{ champ1.name }}: {{ champ1.title }}</div>
      <div class="skill-wrapper">
        <img :src="`${DEFAULT_PASSIVE_URI}/${champ1.passive.image.full}`" @mouseover="onSkillOver(champ1.passive)" @mouseleave="champTooltipState=false" />
        <template v-for="(spell, idx) in champ1.spells">
          <div class="skill">
            <img :src="`${DEFAULT_SPELL_URI}/${spell.id}.png`" @mouseover="onSkillOver(spell)" @mouseleave="champTooltipState=false"  lazy/>
          <div class="skill-key">{{ skillKey[idx] }}</div>
          </div>
        </template>
        <ChampTooltip v-if="champTooltipState" :info="champSpellInfo" />
      </div>
      <div class="tip-container" v-if="champ1.allytips.length && champ1.enemytips.length">
        <div>
          <div style="margin-bottom: 5px">챔피언 팁</div>
          <template v-for="tip in champ1.allytips" :key="tip">
             <div>-&nbsp;{{ tip }}</div>
          </template>
        </div>
        <div style="margin-right: 10px;">
          <div style="margin-bottom: 5px">챔피언 상대할때 팁</div>
          <template v-for="tip in champ1.enemytips" :key="tip">
             <div>-&nbsp;{{ tip }}</div>
          </template>
        </div>
      </div>
      <div class="champ-stroy">{{ champ?.blurb }}</div>

    </div>
    <LoadingComponent />
  </div>
</template>

<script lang="ts" setup>
import type { ChampInfoJSON, Champion } from '~/utils/types/champions';

const props = withDefaults(defineProps<{
  champ?: Champion,
}>(), {
  champ: undefined,
})
const loadingStore = useLoadingStore();
const {loaingState} = storeToRefs(loadingStore);
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
const skillKey:string[] = ['q','w','e','r']
const DEFAULT_SKIN_URI = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading'
const DEFAULT_SPELL_URI = 'https://ddragon.leagueoflegends.com/cdn/14.9.1/img/spell';
const DEFAULT_PASSIVE_URI = 'https://ddragon.leagueoflegends.com/cdn/14.9.1/img/passive';
watch(() => props.champ, async (cur:Champion | undefined) => {
  loaingState.value = true;
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
    setTimeout(() => {
      loaingState.value = false; 
    },500)
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

.info_card{
  width: 100%;
  grid-template-columns: 250px 1fr;
  position: relative;
  height: 100%;
  align-items: center;
  display:grid
}

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
  text-align: left;
  margin-bottom: 30px;
  flex-grow:3;
}

.champ-info{
  margin-left: 20px;
  .skill {
    width: 50px;
    height: 50px;
    position: relative;
    .skill-key {
      width: 15px;
      opacity: 0.8;
      text-align: center;
      background-color: #373737;
      position: absolute;
      right:0px;
      bottom:0;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .skill-wrapper {
    position: relative;
    display: flex;
    gap: 10px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .champ-stroy {
    background-color: #31313C;
    border-radius: 15px;
    border: 1px solid white;
    margin-block: 10px;
    color: white;
    height: 50px;
    /* min-height: 120px; */
    padding: 10px;
  }
  .tip-container {
    display: flex;
    width: 100%;

    color: white;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-block: 10px;
    >   div {
      height: 100px;
      border: 1px solid white;
      border-radius: 15px;
      background-color: #31313C;
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