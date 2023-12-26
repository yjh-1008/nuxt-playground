<template>
<div>
  <input type="text" :value="modelValue" @change="onChange" />
  <button @click="emits('search')">search button</button>
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