interface champIdx {
  freeChampionIds: number[],
  freeChampionIdsForNewPlayers: number,
  maxNewPlayerLevel: number
}

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const repo:champIdx = await $fetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations', {
    method: 'get',
    query: {'api_key' : runtimeConfig.public.apiBase},
  })
  return repo.freeChampionIds;
})
