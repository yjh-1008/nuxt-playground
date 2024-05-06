<template>
  <div ref="cardRef" class="champ-card" :style="{'background-image': champImg}">
    <img :src="champImg" class="champ-img"/>
    <div class="champ-name">{{ champName.name }}</div>
  </div>
</template>

<script lang="ts" setup>
interface ChampCard {
  name : string,
}
const props = defineProps<{
  position: number,
  cur: number,
  angle: number,
  test1: number,
}>()
const ratateAngle = 360 / 10;


const cardRef = ref();

const rotate = () => {

  if((props.position+props.cur+4)%9 === 0) {
    console.log(props.position, props.cur, props.test1)
    cardRef.value.style.transform = ` rotateY(0deg) translateZ(288px) scale(1.5)`;
    cardRef.value.style.opacity = 1;
  } else if ((props.position+props.cur+4)%9 === 1) {
    cardRef.value.style.transform = `translateZ(288px) translateX(200px) scale(1.2)`
    cardRef.value.style.opacity = 1;
  } else if((props.position+props.cur+4)%9 === 2) {
    cardRef.value.style.transform = `translateZ(288px) translateX(400px)`
    cardRef.value.style.opacity = 1;
  }else if((props.position+props.cur+4)%9 === 8) {
    cardRef.value.style.transform = ` translateZ(288px) translateX(-200px) scale(1.2)`
    cardRef.value.style.opacity = 1;
  } else if((props.position+props.cur+4)%9 === 7) {
    cardRef.value.style.transform = ` translateZ(288px) translateX(-400px)`
    cardRef.value.style.opacity = 1;
  } else {
    cardRef.value.style.opacity = 0;
  }
}

const {data:champName} = useFetch<ChampCard>(`/api/champInfo?id=${props.test1}`,{lazy:true})
const champImg = computed<string>(() =>  {
  if(champImg.value !== null) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champName.value.name}_0.jpg`
  }
  return '';
})
onMounted(() => {
  rotate();

})

watch(() => props.cur, (c:number)=> {
  rotate();
  // console.log(c);
})
</script>

<style lang="scss">
.champ-card {
  position: absolute;
  /* 셀 배치를 약간씩 떨어뜨림*/
  opacity:0;
  width: 210px;
  height: 300px ;
  transition: all .5s;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  .champ-img {
    width: 210px;
    height:200px;
    object-fit: contain;
  }
  .champ-name {
    position: absolute;
    bottom:50px;
    width: 105px;
    background-color: #000;
    color: white;
    font-size: 13px;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    opacity: 0.7;
  }
  /* transform: d(ratateAngle)deg) rotateZ(v-bind(colTz)deg); */
}
</style>