import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore',() => {
  const puuid = ref<string>('');
  
  function setPuuid(value: string) {
    puuid.value = value;
  }

  return {puuid, setPuuid};
})
