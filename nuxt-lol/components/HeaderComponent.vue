<template>
  <header>
    <NuxtLink class="item" activeClass="active" to="/">Home</NuxtLink>
    <NuxtLink class="item" activeClass="active" to="/champions">챔피언</NuxtLink>
    <NuxtLink class="item" activeClass="active" to="/rank?tier=123">랭킹</NuxtLink>
    <NuxtLink class="item" activeClass="active" to="/">통계</NuxtLink>
  </header>
</template>

<script lang="ts" setup>

</script>

<style>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  gap: 100px;
  /* width:100vw; */
  background-color: rgb(33 58 150);
}

.item{
  color: white;
  border-radius: 25%;
}

.active, .item:hover {
  background-color: #1d2d60;
  transition: all 0.5s ease-out;
}

</style>