export default (url: string) => {
  const runtimeConfig = useRuntimeConfig();
  return useFetch(url, {
    baseURL: 'https://kr.api.riotgames.com/lol/',
    query: {'api_key' : runtimeConfig.public.apiBase},
    onRequest({ request, options }) {
        console.log('request',request);
    },
    onRequestError({ request, options }) {
      throw createError({
        statusCode:401,
        statusMessage: "에러 발생" 
      })
    },
    onResponseError({ request, response, options }) {
        console.log(response);
    }
  })
};
