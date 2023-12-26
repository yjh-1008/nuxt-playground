<template>
  <div>
    <header class="title">
    <NuxtLink class="logo" to="/">Nuxt Shoping </NuxtLink>
  </header> 
  <NuxtPage />
  </div>

</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
