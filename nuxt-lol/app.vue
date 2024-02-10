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
import '@/assets/css/basic_set.css'
</script>
