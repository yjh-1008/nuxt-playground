<template>
  <ul class="position-selector">
    <li v-for="(pos,idx) in positions" :key="pos" @click="onClick(idx)" :class="pos === cur ? 'active' : ''">
      {{ pos }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
const positions:string[] = ['전체','탑','정글','미드','바텀','서폿'];

const cur = defineModel<string>();

const onClick = (idx: number) => {
  cur.value = positions[idx];
}
</script>

<style scoped lang=scss>
.position-selector {
  background-color: #d3d3d3;
  height: 700px;
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;
  border-radius: 5px;
  box-sizing: border-box;
  margin:0 0 30px 0;
  li {
    transition: none;
    width: 100px;
    border-radius: 5px;
    padding-block: 5px;
    text-align: center;
    color: rgb(16, 43, 154);
    font-weight: bold;
    cursor: pointer;
    list-style: none;
  }
  li.active {
    background-color: rgb(4, 4, 170);
    color: white;
  }
}
</style>