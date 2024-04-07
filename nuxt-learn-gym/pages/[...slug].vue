<template>
  <div>
    {{ route.params.slug }}
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style></style>
