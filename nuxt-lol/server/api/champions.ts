import createAxios from ".";
import axios from 'axios';
const instance = createAxios('platform/v3/');
const runtimeConfig = useRuntimeConfig();
export default defineEventHandler(async (event) => {
  const respose =await axios.get(`https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.LOL_API_KEY}`);
  return respose.data;
})
// export default rotations;
