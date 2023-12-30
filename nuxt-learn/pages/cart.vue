<template>
  <div class="container">
    <h1>카트페이지</h1>
    <div class="list-wrapper">
      <ul>
        <li v-for="item in store.cartItems" :key="item.id" class="list-item">
          <img :src="item.imageUrl" :alt="item.name" class="thumbnail">
          <div class="description">
            <p>{{ item.name }}</p>
            <span>{{ item.price }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <button type="button" class="extra-panel">구매하기</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useMainStore} from '@/stores/index';
import { useAsyncData } from 'nuxt/app';
import { FETCH_CART_ITEMS } from '~/stores';
const store = useMainStore();

useAsyncData('cartProducts',async () => {
  await store.FETCH_CART_ITEMS;
});
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