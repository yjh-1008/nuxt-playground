<template>
  <div class="tooltip">
    {{ info.description }}
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
  background: gray;
  color: white;
  top: 60px;
}
</style>