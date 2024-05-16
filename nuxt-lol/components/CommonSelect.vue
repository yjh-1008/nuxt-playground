<template>
  <div class="common-select" @click="dropdownState = !dropdownState">
    <div>{{ value }}</div>
    <font-awesome-icon class="arrow" icon="fa-chevron-down"  />
    <div v-show="dropdownState" class="dropdown-list">
      <div class="dropdown-item" v-for="item in props.items"  @click="onItemSelect(item.name)" :key="item.value" :value="item.value">
      {{ item.name }}
      </div>
    </div>
  </div>
  <select v-model="value">
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
const dropdownState = ref<boolean>(false);
const value = defineModel<string>();
const props = defineProps<{
  items: Item[]
}>()

const onItemSelect = (item: string) => {
  value.value = item;
}
</script>

<style lang="scss">
.common-select{
  position: relative;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  .arrow {
    position: absolute;
    right: 3px;
    width: 15px;
  }
  .dropdown-list {
    position: absolute;
    top: 33px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: white;
    height: 100px;
    border: 1px solid black;
    width: 100%;
    .dropdown-item {
      width: 100%;
      color: black;
      display:flex;
      align-items: center;
      height: 25px;
      border-radius: 0;
      border-bottom: 1px solid black;
    }
  }
}
</style>