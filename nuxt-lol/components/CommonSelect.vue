<template>
  <select>
    <option v-for="item in props.items" :key="item.value" :value="item.value">
      {{ item.name }}
    </option>
  </select>
</template>

<script lang="ts" setup>
interface Item {
  value: string,
  name: string
}
const props = defineProps<{
  items: Item[]
}>()
</script>

<style>

</style>