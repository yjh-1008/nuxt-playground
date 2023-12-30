import {useMainStore} from '@/stores/index';

export default defineNuxtPlugin(async() => {
  if(!process.server) return;

  const store = useMainStore();
  store.FETCH_CART_ITEMS();
})