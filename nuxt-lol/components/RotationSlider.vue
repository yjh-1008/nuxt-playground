<template>
  <div class="rotation-wrapper">
    <div class="title">챔피언 로테이션</div>
    <div class="rotation">
      <ClientOnly>
        <font-awesome-icon @click="onPrev" class="left-arrow-btn" icon="fa-chevron-left" />
      </ClientOnly>
      <div class="container">
        <div ref="carousel" class="card-wrapper">
          <template v-for="(c, idx1) in rotationChamps" :key="c">
           <RotationChampCard :position="idx1" :test1="c" :cur="idx"  :angle="angle" />
          </template>
        </div>
      </div>
      <ClientOnly>
        <font-awesome-icon class="right-arrow-btn" icon="fa-chevron-right" @click="onNext"/>
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
const idx = ref<number>(0);
const RotationChampCard = resolveComponent('RotationChampCard')
const MyButton1 = resolveComponent('ChampCard')
const cardWrapper = ref();
const arr = ref<any>([0,1,2,3,4,5,6,7,8]);

const onPrev = () => {
  if(idx.value < 0) idx.value = 8;
  else idx.value-=1;
}
const ratateAngle = 360 / 10;
const carousel = ref();
const {data:rotationChamps} = useFetch('/api/rotationChamp')

const angle = ref<number>(0);
const onNext = () => {
  if(idx.value >= 9) idx.value = 0;
  else idx.value+=1;
  // arr.value.push(arr.value.shift());
}
</script>

<style scoped lang="scss">
.rotation {
  position: relative;
    top: 100px;
    width: 100%;
    height:300px;
    display: flex;
    justify-content: center;
    align-items: center;
  .left-arrow-btn {
    color: #fff;
    position: absolute;
    width: 100px;
    left:1%;
    z-index: 2;
    font-size: 3rem;
  }
  .right-arrow-btn {
    color: #fff;
    position: absolute;
    width: 100px;
    right:1%;
    z-index: 2;
    font-size: 3rem;
  }
  .next {
    position: absolute;
    width: 100px;
    z-index: 2;
    right:10px;
  }
}

.rotation-wrapper {
  margin-top: 30px;
  .title {
    margin-left: 100px;
    padding-right: 20%;
    width: fit-content;
    font-size: 1.5rem;
    color: white;
    font-weight: 700;
  }
  .container {
    width: 210px;
    min-width: 210px;
    height: 300px;
    position: relative;
    perspective: 1000px;
    /* */
    .card-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      transform-style: preserve-3d;
      box-sizing: border-box; 
      transition: all .5s ease;
      object-fit:scale-down;
    }
    button {
      position: absolute;
    }
  }

}
</style>