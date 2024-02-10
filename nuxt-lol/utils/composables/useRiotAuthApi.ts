export default (url: string) => {
  const runtimeConfig = useRuntimeConfig();
  return useFetch(url, {
    baseURL:  'https://asia.api.riotgames.com/riot/',
    query: {'api_key' : runtimeConfig.public.apiBase},
    onRequest({ request, options }) {
        console.log('request',request);
    },
    onResponse({ request, response, options }) {
      console.log(response);
      return response;
    },
    onRequestError({ request, options }) {
        console.log(request);
    },
    onResponseError({ request, response, options }) {
        console.log(response);
    },
  }
  )
};
