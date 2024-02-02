<template>
  <div class="search-input-wrapper">
    <i class="search-icon" />
    <input class="search-input" type="text" v-model="text" placeholder=" 명을 입력해주세요." @enter=" () =>emits('onSearch')"  />
  </div>

</template>

<script lang="ts" setup>
const emits = defineEmits(['update:modelValue','onSearch']);
const props = defineProps<{
  modelValue: string,
}>();
const text = computed({
  get: () => props.modelValue,
  set: (val:string) => emits('update:modelValue', val),
})
</script>

<style scoped>
.search-input-wrapper {
  display: flex;
  padding-bottom: 1%;
  position: relative;
  top: 4%;
  left: 40%
}
.search-icon {
  position: absolute;
  left:10px;
  top: 10px;
  background-image: url('@/assets/icons/search_icon.svg');
  background-size: cover;
  width:30px;
  height: 30px;
}
.search-input {
  min-width: 350px;
  width: 450px;
  height: 40px;
  font-size: 1rem;
  border-radius: 10px;
  padding-left: 50px;
}
</style>