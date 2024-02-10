
import axios from "axios";
export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const query = getQuery(event)
  // const baseURL = `https://asia.api.riotgames.com/riot`;
  const response  = await event.$fetch(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${query.name}/${query.tag}`, {params: {
    'api_key': runtimeConfig.public.apiBase
  }});
  return response;
});
