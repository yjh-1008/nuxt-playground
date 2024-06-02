<template>
  <div class="info_card">
    <SkinSlider :champ="props.champ" />
    <div class="champ-info" v-if="selectChamp">
      <div class="title">{{ selectChamp.name }}: {{ selectChamp.title }}</div>
      <div class="skill-wrapper">
        <img :src="`${DEFAULT_PASSIVE_URI}/${selectChamp.passive.image.full}`" @mouseover="onSkillOver(selectChamp.passive)" @mouseleave="champTooltipState=false" />
          <div class="skill" v-for="(spell, idx) in selectChamp.spells">
            <img :src="`${DEFAULT_SPELL_URI}/${spell.id}.png`" @mouseover="onSkillOver(spell)" @mouseleave="champTooltipState=false"  lazy/>
            <div class="skill-key">{{ skillKey[idx] }}</div>
          </div>
        <ChampTooltip v-if="champTooltipState" :info="champSpellInfo" />
      </div>
      <div class="tip-container" v-if="selectChamp.allytips.length && selectChamp.enemytips.length">
        <TipBox :tips="selectChamp.allytips" >
          <div style="margin-bottom: 5px">챔피언 팁</div>
        </TipBox>
        <TipBox :tips="selectChamp.enemytips" >
          <div style="margin-bottom: 5px">챔피언 상대할때 팁</div>
        </TipBox>
      </div>
      <!-- <div class="champ-stroy">{{ champ?.blurb }}</div> -->
    </div>
    <LoadingComponent />
  </div>
</template>

<script lang="ts" setup>
import type { ChampInfoJSON, Champion } from '~/utils/types/champions';

const props = withDefaults(defineProps<{
  champ: Champion,
}>(), {
  champ: undefined,
})
const loadingStore = useLoadingStore();
const {loaingState} = storeToRefs(loadingStore);

const selectChamp = ref<Champion>();

const champSpellInfo = ref();
const champTooltipState = ref<boolean>(false);
const onSkillOver = (item: Object) => {
  champSpellInfo.value= item;
  champTooltipState.value = true;
}
const skillKey:string[] = ['q','w','e','r']

const DEFAULT_SPELL_URI = 'https://ddragon.leagueoflegends.com/cdn/14.9.1/img/spell';
const DEFAULT_PASSIVE_URI = 'https://ddragon.leagueoflegends.com/cdn/14.9.1/img/passive';


watch(() => props.champ, async (cur:Champion | undefined) => {
  if(typeof cur !== undefined) {
    if(cur !== undefined) {
      const response = await $fetch(`https://ddragon.leagueoflegends.com/cdn/14.9.1/data/ko_KR/champion/${cur.id}.json`) as any;
      selectChamp.value = response.data[cur.id];
    } 
  }
})

</script>

<style scoped lang="scss">

.info_card{
  width: 100%;
  grid-template-columns: 300px 1fr;
  display: grid;
  position: relative;
  height: 100%;
  align-items: center;
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
  height: 600px;
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
    overflow-y: scroll;
    padding: 10px;
  }
  .tip-container {
    display: flex;
    width: 100%;
    color: white;
    gap: 20px;
    align-items: center;
    margin-top: 50px;
    >  div {
      height: 100px;
      border: 1px solid white;
      border-radius: 15px;
      background-color: #31313C;
      padding: 10px;
      max-width: 45%;
      overflow: hidden;
    }
  }
}




</style>