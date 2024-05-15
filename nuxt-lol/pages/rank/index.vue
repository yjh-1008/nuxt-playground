<template>
  <div>
    <div class="header">랭킹</div>
    <div class="rank-tab">
      <div v-for="rt in RANK_TYPE" :key="rt" @click="onRankTpClick(rt)" :class="rt === rankTp ? 'active' : ''">
        {{ rt }}
      </div>
    </div>
    <CommonSelect :items="RANK_ITEMS" />
    <div>
      <div>#</div>
      <div>소환사</div>
      <div>티어</div>
      <div>LP</div>
      <div>모스트 챔피언</div>
      <div>모스트 챔피언</div>
      <div>레벨</div>
      <div>승률</div>
    </div>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Items {
  value: string,
  name: string
}
const config = useRuntimeConfig()
const RANK_TYPE = ['솔로랭크','자유랭크'];
const rankTp = ref<string>('솔로랭크');
const route = useRoute();
const {data} = await useFetch('/api/rank',{
  query: {
    tier: route.query.tier,
  }
})

const RANK_ITEMS: Items[] = [
  {
    value: 'challengerleagues',
    name: 'Challenger',
  },
  {
    value: 'GrandMaster',
    name: 'GrandMaster',
  },
  {
    value: 'Master',
    name: 'Master',
  },
  {
    value: 'Diamond',
    name: 'Diamond',
  },
  {
    value: 'Emerald',
    name: 'Emerald',
  },
  {
    value: 'Platinum',
    name: 'Platinum',
  },
  {
    value: 'Gold',
    name: 'Gold',
  },
  {
    value: 'Sliver',
    name: 'Sliver',
  },
  {
    value: 'Bronze',
    name: 'Bronze',
  },
  {
    value: 'Iron',
    name: 'Iron',
  },
]

const onRankTpClick = (tp: string) => {
  rankTp.value = tp;
}
</script>

<style lang="scss">
.header {
  background-color: #28344E;
  color: white;
  height: 50px;
  border-bottom: 1px solid black;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 10%;

}

.rank-tab {
  height: 50px;
  background-color: #28344E;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 10%;
  div {
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }
  div.active {
    background-color: #d3d3d3;
    transition: none;
    padding: 5px;
    border-radius: 5px;
  }
}
</style>