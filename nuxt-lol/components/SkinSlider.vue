<script setup lang="ts">
import type { Champion } from '~/utils/types/champions';

const DEFAULT_SKIN_URI:string = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading'
const champImgURI = ref<string>();
  const skinIdx = ref<{idx:number, num:number}>({
  idx:0,
  num:0,
});
const props = withDefaults(defineProps<{
  champ: Champion,
}>(), {

})
const selectChamp = ref<Champion>();
watch(() => props.champ, async (cur:Champion | undefined) => {
  if(typeof cur !== undefined) {
    if(cur !== undefined) {
      champImgURI.value = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${cur.id}_0.jpg`
      const response = await $fetch(`https://ddragon.leagueoflegends.com/cdn/14.9.1/data/ko_KR/champion/${cur.id}.json`) as any;
      selectChamp.value = response.data[cur.id];
      if(selectChamp.value && selectChamp.value.skins !== undefined) {
        skinIdx.value = {
          idx: 0,
          num: selectChamp.value.skins[0].num
        }
      }
      
    } 
  }
})

const onPrev = () => {
  if(selectChamp.value === undefined || selectChamp.value.skins === undefined) return;
  if(skinIdx.value.idx === 0) skinIdx.value.idx = selectChamp.value?.skins.length-1; 
  else skinIdx.value.idx -= 1;
  skinIdx.value.num = selectChamp.value.skins[ skinIdx.value.idx].num;
}

const onNext = () => {
  if(selectChamp.value === undefined || selectChamp.value.skins === undefined) return;
  if(skinIdx.value.idx === selectChamp.value?.skins.length-1) skinIdx.value.idx = 0;
  else skinIdx.value.idx += 1;
  skinIdx.value.num = selectChamp.value.skins[ skinIdx.value.idx].num;
}

</script>


<template>
  <div class="wrapper" >
    <ClientOnly>
      <font-awesome-icon @click="onPrev" class="left-arrow-btn" icon="fa-chevron-left" />
    </ClientOnly>
    <div class="imageContainer" :style="{transform: `translate(-${300*skinIdx.idx}px, 0px)`}">
      <!-- {{ selectChamp.skins }} -->
      <div  v-for="(skin, idx) in selectChamp?.skins" :key="skin.name">
          <div class="image" :style="{'background-image': `url(${DEFAULT_SKIN_URI}/${selectChamp?.id}_${skin.num}.jpg)`}">
            <div class="name" v-if="selectChamp && selectChamp.skins !== undefined">
              {{ skin.name === 'default' ? selectChamp.name : skin.name  }}
            </div>
        </div>
      </div>
    </div>
    <ClientOnly>
          <font-awesome-icon class="right-arrow-btn" icon="fa-chevron-right" @click="onNext" />
    </ClientOnly>
  </div>
</template> 



<style scoped lang="scss">
.wrapper {
  position: relative;
  width: 300px;
  height: 100%;
  overflow: hidden;
  margin-block: auto;
}
.imageContainer {
  display: flex;
  height: 100%;
  transition: 0.6s;
  align-items: center;
}

.image {
  height: 600px;
  width: 300px;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center center;
  position :relative;
}

.left-arrow-btn {
    width: 30px;
    height:30px;
    position:absolute;
    left: 0;
    top: 50%;
    color: white;
    cursor:pointer;
    z-index: 3;
  }

.right-arrow-btn {
  width: 30px;
  height:30px;
  color: white;
  position:absolute;
  right: 0;
  top: 50%;
  cursor: pointer;
  z-index: 3;
}
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
</style>