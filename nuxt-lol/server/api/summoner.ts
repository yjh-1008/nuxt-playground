import createAxios from ".";

const instance = createAxios('summoner');
// const runtimeConfig = useRuntimeConfig();
async function getUserInfoByName(username:string) {
  return await instance.get(`/v4/summoners/by-name/${username}`,{params: {'api_key': 'RGAPI-e1d5c334-c09e-4187-b690-a0963ae989db'}});
}

export {getUserInfoByName};