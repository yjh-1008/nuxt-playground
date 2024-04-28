<template>
  <div class="rotation-wrapper">
    <div class="title">챔피언 로테이션</div>
    <div class="card-wrapper">
      <template v-for="c in [1,2,3,4,5,6,7]" :key="c">
        <component :is="c === idx ? MyButton : MyButton1 " />
      </template>
    
    </div>
  </div>
</template>

<script lang="ts" setup>
const idx = ref<number>(1);
const MyButton = resolveComponent('RotationChampCard')
const MyButton1 = resolveComponent('ChampCard')
</script>

<style scoped lang="scss">
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
  .card-wrapper {
    display: flex;
    margin-top: 20px;
    border: 1px solid black;
    position: relative;
    height: 400px;
  }
}
</style>