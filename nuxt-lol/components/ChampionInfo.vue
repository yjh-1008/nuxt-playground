<template>
  <!-- TODO : 챔피언 클릭시 해당 챔피언 상세보기 페이지로 이동 -->
  <div class="item">
    <img style="width:60px; height: 60px" :src="imageURL" lazy />
    <div class="name">  {{ info.name }}</div>
  </div>
</template>

<script setup lang="ts">
import {type Champion} from '@/utils/types/champions';
const emtis = defineEmits(['onClick'])
const props = defineProps<{
  info: Champion,
}>();
const router = useRouter();
const imageURL = computed(() => `https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${props.info.image.full}`);


const onChampClick = () => {
  router.push(`champions/${props.info.id}`);
}
</script>

<style scoped>
.name {
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.item{
  width: 60px;
  height:100px;
  align-items: center;
  cursor: pointer;
  /* justify-content: right; */
  /* position: relative; */
  top: 50%;
  left: 50%;
}
</style>