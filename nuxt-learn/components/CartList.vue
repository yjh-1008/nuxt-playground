<template>
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
</template>

<script setup>
import {useMainStore} from '@/stores/index';
const store = useMainStore();
const {data} = useFetch(async () => {
  return store.FETCH_CART_ITEMS();
});
</script>