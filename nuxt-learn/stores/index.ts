import { defineStore } from 'pinia'
export type RootState = {
  cartItems: any[];
};
export const useMainStore = defineStore('main', {
  state: () =>
  ({
    cartItems: [],
  } as RootState),
  actions: {
    addCartItem(cartItem: any) {
      this.cartItems.push(cartItem);
    }
  },
})