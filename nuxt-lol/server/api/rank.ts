import { FetchResult } from "nuxt/app";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  // console.log(query);
  const CHALLENGER_API = `https://kr.api.riotgames.com/lol/league/v4/${query.tier}/by-queue/RANKED_SOLO_5x5?api_key=${config.public.apiBase}`;
  const response = await $fetch(CHALLENGER_API, {method: 'GET'});
  return response;
})
