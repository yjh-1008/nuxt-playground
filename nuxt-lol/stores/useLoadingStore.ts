import { defineStore } from 'pinia'

interface State {
  loaingState: boolean;
}

export const useLoadingStore = defineStore({
  id: 'useLoadingStore',
  state: ():State => ({
    loaingState: false,
   }),
  actions: {
    setLoadingState(newState: boolean) {
      this.loaingState = newState;
    }
  }
})
