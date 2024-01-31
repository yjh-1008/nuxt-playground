<template>
  <!-- TODO : 챔피언 클릭시 해당 챔피언 상세보기 페이지로 이동 -->
  <div class="item" @click="">
    <img style="width:60px; hieght: 6a0px" :src="imageURL" />
    <div class="name">  {{ info.name }}</div>
  </div>
</template>

<script setup lang="ts">
import {type Champion} from '@/utils/types/champions';
const props = defineProps<{
  info: Champion,
}>();

const imageURL = computed(() => `https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${props.info.image.full}`)
</script>

<style scoped>
.name {
  color: white;
}

.item{
  width: 60px;
  height: 70px;
  align-items: center;
  justify-content: center;
}
</style>