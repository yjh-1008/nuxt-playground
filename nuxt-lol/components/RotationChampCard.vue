<template>
  <div ref="cardRef" class="champ-card active">
    <div>test {{ position
    
    }}</div>
  </div>
</template>

<script lang="ts" setup>
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
    cardRef.value.style.transform = ` rotateY(0deg) translateZ(288px)`;
    cardRef.value.style.opacity = 1;
  } else if ((props.position+props.cur+4)%9 === 1) {
    cardRef.value.style.transform = `translateZ(288px) translateX(200px)`
    cardRef.value.style.opacity = 1;
  } else if((props.position+props.cur+4)%9 === 2) {
    cardRef.value.style.transform = `translateZ(288px) translateX(400px)`
    cardRef.value.style.opacity = 1;
  }else if((props.position+props.cur+4)%9 === 8) {
    cardRef.value.style.transform = ` translateZ(288px) translateX(-200px)`
    cardRef.value.style.opacity = 1;
  } else if((props.position+props.cur+4)%9 === 7) {
    cardRef.value.style.transform = ` translateZ(288px) translateX(-400px)`
    cardRef.value.style.opacity = 1;
  } else {
    cardRef.value.style.opacity = 0;
  }
}

const info = useFetch(`/api/champInfo?id=${props.test1}`)

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
  width: 190px;
  height: 120px ;
  transition: all .5s;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: all .5s;
  /* transform: d(ratateAngle)deg) rotateZ(v-bind(colTz)deg); */
}
</style>