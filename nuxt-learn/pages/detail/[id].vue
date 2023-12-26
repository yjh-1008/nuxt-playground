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
import {fetchProeuctById} from '../../api/index';
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