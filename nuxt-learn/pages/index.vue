<template>
  <div clas="app">
    <SearchInput v-model="searchValue" @search="onSearch"/>
    <main>
      <ul>
      <li v-for="p in data" :key="p.id" class="item flex" @click="moveToDetailPage(p.id)">
        <img :src="p.imageUrl" :alt="p.name" class="product-image"/>
        <p>{{ p.name }}</p>
        <span>{{ p.price }}</span>
      </li>
    </ul>
    <div class="cart-wrapper">
      <button class="btn" @click="routeToCartPage">장바구니 바로가기</button>
    </div>>
  </main>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from 'nuxt/app';
import { useRouter } from 'vue-router';
import {fetchProeuctsByKeyword} from '@/api/index';
import SearchInput from '~/components/SearchInput.vue';
import { type Product } from '@/types/types';
const searchValue = ref<string>('');
const router = useRouter();
const { data , pending } = await useAsyncData<Product[]>(
  'products',
  async () => { 
    let ret:Product[] = await $fetch('http://localhost:3000/products');
    ret.forEach((v) => v.imageUrl = `https://picsum.photos/id/${v.id}/640/480`);
    return ret;
  }
)
const routeToCartPage = () => {
  router.push(`/cart`)
}

const moveToDetailPage = (id:number) => {
  router.push(`detail/${id}`)
}


const onSearch = async() => {
  const ret:Product[] = await fetchProeuctsByKeyword(searchValue.value);
  ret.forEach((v) => v.imageUrl = `https://picsum.photos/id/${v.id}/640/480`);
  data.value = ret;

}

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
