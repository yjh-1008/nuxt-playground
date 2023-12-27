<template>
<div class="input-wrapper flex">
  <input type="text" :value="modelValue" @change="onChange" class="search-input" />
</div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const emits = defineEmits(['update:modelValue', 'search']);
const props = defineProps<{
  modelValue: string;
}>()

const onChange = (e:Event) => {
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