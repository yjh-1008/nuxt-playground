<template>
  <div>
    <HeaderComponent />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<style> 
body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
</style>
