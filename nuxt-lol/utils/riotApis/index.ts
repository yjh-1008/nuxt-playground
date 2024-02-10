import axios from  'axios';

function createInstance(baseURL: string,) {
  const runtimeConfig = useRuntimeConfig();
  const instance  = axios.create({
    baseURL,
    params: {
      'api-key' : runtimeConfig.public.apiBase,
    }
  });
  return instance;
}

export {createInstance};