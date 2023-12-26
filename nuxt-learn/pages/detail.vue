<template>
  <div>
    <img :src="data.imageUrl" :alt="data.name" class="product-image"/>
          <p>{{ data.name }}</p>
          <span>{{ data.price }}</span>
  </div>
  </template>
  
  <script setup lang="ts">
  import { useLazyAsyncData } from 'nuxt/app';
  import { useRoute } from 'vue-router';
  import {fetchProeuctById} from '@/api/index';
  interface Product {
    id: number;
    imageUrl: string;
    name: string;
    price: string;
  };
  const route = useRoute();
  const { data , pending } =  useLazyAsyncData<any>(
    'product', async () => {
    const ret = await fetchProeuctById(route.params.id[0]);
    ret.imageUrl = `https://picsum.photos/id/${ret.id}/640/480`;
    return ret;
  });
  </script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>