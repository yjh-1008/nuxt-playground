import axios from 'axios';
function createAxios(path: string) {
  const instance = axios.create({
    baseURL: `https://kr.api.riotgames.com/lol/${path}`,
  })
  return instance;
}



// const runtimeConfig = useRuntimeConfig();
// const apiBase = runtimeConfig.public.apiBase;

// function addKEY(str:string):string {
//   const url = str + `?api_key=${apiBase}`;
//   return url
// }


export default createAxios;