<template>
  <div>
    <div class="header">랭킹</div>
    <div class="rank-tab">
      <div v-for="rt in RANK_TYPE" :key="rt" @click="onRankTpClick(rt)" :class="rt === rankTp ? 'active' : ''">
        {{ rt }}
      </div>
    </div>
    <CommonSelect :items="RANK_ITEMS" v-model="rank" />
    <CommonSelect v-if="isLowTier" :items="TIER_STEPS" v-model="rankStep" />
    <div class="rank-info">
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
    value: 'all',
    name: 'all',
  },
  {
    value: 'challengerleagues',
    name: 'Challenger',
  },
  {
    value: 'grandmasterleagues',
    name: 'GrandMaster',
  },
  {
    value: 'masterleagues',
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

const TIER_STEPS:Items[] = [
  {
    value: '4',
    name :'Ⅳ',
  }, 
  {
    value: "3",
    name:'Ⅲ'
  },
  {
    value: '2',
    name: 'Ⅱ',
  },
  {
    value: '1',
    name: 'Ⅰ',
  }
]

const rank = ref<string>(RANK_ITEMS[0].value);
const rankStep = ref<string>('4')
const isLowTier = computed<boolean>(() =>  {
  const findIdx = RANK_ITEMS.findIndex((item) => item.value === rank.value);
  return findIdx > 3;
})
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

.rank-info {
  display: flex;
  width: 50%;
  min-width: 1000px;
  justify-content: space-around;
  align-items: center;
  background-color: #28344E;
  color: white;
  font-weight: bold;
  height: 30px;
  margin: 0 auto;
}
</style>