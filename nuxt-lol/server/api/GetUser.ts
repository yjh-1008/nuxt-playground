import axios from "axios";
export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  console.log(event.context.params)
  // const baseURL = `https://asia.api.riotgames.com/riot`;
  const response  = await event.$fetch(`https://asia.api.riotgames.com/riot/주노듀노`);
  // console.log(response);
  return {data: 'response'};
});
