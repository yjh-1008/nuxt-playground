<template>
  <div class="rotation-wrapper">
    <div class="title">챔피언 로테이션</div>
    <div class="rotation">
      <button @click="onPrev">버튼</button>
      <div class="container">
     
        <div ref="carousel" class="card-wrapper">
          <template v-for="(c, idx1) in arr" :key="c">
           <MyButton :position="idx1" :test1="c" :cur="idx"  :angle="angle" />
          </template>
        </div>
      </div>
      <button @click="onNext" class="next">버튼</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const idx = ref<number>(0);
const MyButton = resolveComponent('RotationChampCard')
const MyButton1 = resolveComponent('ChampCard')
const cardWrapper = ref();
const arr = ref<any>([0,1,2,3,4,5,6,7,8]);
const onPrev = () => {
  if(idx.value < 0) idx.value = 8;
  else idx.value-=1;
}
const ratateAngle = 360 / 10;
const carousel = ref();
// Math.tan를 사용 => 각도를 라디안 값으로 변환
const radian = (ratateAngle / 2) * Math.PI / 180;
const angle = ref<number>(0);
const onNext = () => {
  if(idx.value >= 9) idx.value = 0;
  else idx.value+=1;
  // arr.value.push(arr.value.shift());
}
</script>

<style scoped lang="scss">
img {
  width: 100px;
  height: 150px;
  border: 1px solid blue;
}

.rotation {
  position:relative;
  top: 200px;
  width: 100vw;
  display: flex;
  button:nth-child(1) {
    position: absolute;
    width: 100px;
    left:100px;
    z-index: 2;
  }
  .next {
    position: absolute;
    width: 100px;
    z-index: 2;
    right:100px;
  }
}

.rotation-wrapper {
  margin-top: 30px;
  .title {
    margin: 0 auto;
    padding-right: 20%;
    width:fit-content;
    font-size: 1.3rem;
    color: white;
    font-weight: 700;
  }
  .container {
    width: 220px;
    height: 140px;
    position: relative;
    /* 원근감을 위해 */
    perspective: 1000px;

    margin: 0 auto;
    .card-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      transform-style: preserve-3d; 
      transition: all .5s;
    }
    button {
      position: absolute;
    }
  }

}
</style>