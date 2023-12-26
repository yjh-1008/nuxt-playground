<template>
<div class="input-wrapper flex">
  <input type="text" :value="modelValue" @change="onChange" class="search-input" />
  <button class="btn" @click="emits('search')">search button</button>
</div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const emits = defineEmits(['update:modelValue', 'search']);
const props = defineProps<{
  modelValue: string;
}>()

const onChange = (e:Event) => {
  console.log((e.target as HTMLInputElement).value);
  emits('update:modelValue',(e.target as HTMLInputElement).value); 
}
</script>

<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>