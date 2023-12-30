<template>
  <div class="container">
    <h1>카트페이지</h1>
    <CartList />
    <div>
      <button type="button" class="extra-panel">구매하기</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartList from '@/components/CartList.vue';
import { useAsyncData } from 'nuxt/app';

</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>