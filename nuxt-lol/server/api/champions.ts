import createAxios from ".";
import axios from 'axios';
const instance = createAxios('platform/v3/');
// const runtimeConfig = useRuntimeConfig();
export default defineEventHandler(async (event) => {
  const respose =await axios.get(`https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-94d60f63-c25e-4698-9c2d-c4880145c452`);
  return respose.data;
})

// export default rotations;
