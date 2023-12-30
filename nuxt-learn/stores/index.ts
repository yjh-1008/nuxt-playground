import { defineStore } from 'pinia'
import { type Product } from '@/types/types';
import { fetchCartItems } from '~/api';
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';
export type RootState = {
  cartItems: Product[];
};
export const useMainStore = defineStore('main', {
  state: () =>
  ({
    cartItems: [],
  } as RootState),
  actions: {
    addCartItem(cartItem: Product) {
      const newCartItem = {...cartItem, imageUrl :`https://picsum.photos/id/${cartItem.id}/640/480`}
      this.cartItems.push(newCartItem);
    },
    async FETCH_CART_ITEMS() {
      const ret= await fetchCartItems();
    },
    setCartItems(cartItems:Product[]) {
      this.cartItems = cartItems;
    },
    async nuxtServerInit(storeContext: any, nuxtContext:any) {
      await storeContext.FETCH_CART_ITEMS();
      if (process.server) {
        const { req, res, beforeNuxtRender } = nuxtContext;
      }
    }
  },
})