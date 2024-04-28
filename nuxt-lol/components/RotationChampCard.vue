<template>
  <div class="champ-card">
    <img src="" alt="챔피언"/>
    <div class="info">
      <div>스카너</div>
      <div>포지션 : 탑</div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.champ-card {
  height: 500px;
  width: 600px;
  border: 1px solid red;
  display: grid;
  grid-template-columns: 250px 1fr;
  .info {
    color: white;

  }
}
</style>