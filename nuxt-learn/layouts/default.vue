
<template>
  <div>
    <!-- <h1> <NuctLink to="/">{{ route.name }} 페이지</NuctLink></h1> -->
    
    <slot/>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
<style scoped>
</style>