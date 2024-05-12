<template>
  <div class="empty_wrapper">
    <div class="card">
      <img :src="move_poro"/>
      <div>챔피언을 선택해주세요!</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import move_poro from '@/assets/icons/move_poro.gif'
</script>

<style scoped lang="scss">
.empty_wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .card {
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    img {
      width: 300px;
    }
   div {
      color: white;
      font-weight: 900;
      font-size: 1.3rem;
      text-align: center;
    }
  }

}
</style>