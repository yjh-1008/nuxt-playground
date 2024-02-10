// import user
export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const query = getQuery(event);
  console.log(query);
  const response = await event.$fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${query.id}`,{
    params:{
      api_key: runtimeConfig.public.apiBase
    }
  });

  return response;
})
