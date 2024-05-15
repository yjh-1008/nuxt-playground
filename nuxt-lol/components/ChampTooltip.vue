<template>
  <div class="tooltip">
    <div class="name">{{ info.name }}</div>
    <div>
      {{ info.description }}
    </div>
    
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  info: any
}>()
</script>

<style scoped>
.tooltip {
  position: absolute;
  width: 400px;
  background: #242424;
  border: 1px solid white;
  border-radius: 15px;
  padding: 1%;
  color: white;
  top: 60px;
  .name {
    color: #fda50a
  }
}
</style>