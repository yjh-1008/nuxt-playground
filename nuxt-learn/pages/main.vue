<template>
  <div>
    <ul>
      <li v-for="p in data" :key="p.id">
        {{ p }}
      </li>
    </ul>
    </div>
</template>

<script setup lang="ts">
import { useAsyncData, useFetch } from 'nuxt/app';
import { onMounted, ref } from 'vue';
interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
};

const { data , pending, error, refresh } = await useAsyncData<Product[]>(
  'products',
  () => {return $fetch('http://localhost:3000/products')}
)

</script>

<style></style>
