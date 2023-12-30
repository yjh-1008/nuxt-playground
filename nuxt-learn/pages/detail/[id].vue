<template>
  <div>
    <img :src="data?.imageUrl" :alt="data?.name" class="product-image"/>
    <p>{{ data?.name }}</p>
    <div>here</div>
    <span>{{ data?.price }}</span>
    <button type="button" @click="addToCart">장바구니 추가하기</button>
  </div>
</template>

<script setup lang="ts">
import { useLazyAsyncData } from 'nuxt/app';
import { useRoute, useRouter } from 'vue-router';
import {fetchProeuctById, createCartItem} from '../../api/index';
import {useMainStore} from '@/stores/index';
import { type Product } from '@/types/types';
const store = useMainStore();
const route = useRoute();
const router = useRouter();
const { data , pending } =  useLazyAsyncData<Product>(
  'product', async () => {
  let ret = await fetchProeuctById(route.params.id as string);
  ret['imageUrl'] = `https://picsum.photos/id/${ret.id}/640/480`
  return ret;
});

const addToCart = async () => {
  if(data.value !== null) {
    store.addCartItem(data.value);
    createCartItem(data.value);
    router.push('/cart');
  }
}
</script>