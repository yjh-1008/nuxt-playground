<template>
  <div>
    <div>
      <img src="" />
    <span class="name">그레이브즈</span>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
div {
  height: 100%;
  width: 300px;
  div {
    position: relative;
    height: 100%;
    img {
     height: 100%;
    }
    .name {
      background-color: gray;
      color: white;
      position : absolute;
      bottom : 0;
    }
  }
}
</style>