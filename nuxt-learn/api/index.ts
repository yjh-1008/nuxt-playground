import axios from "axios";
import { type Product } from '@/types/types';
import {useMainStore} from '@/stores/index';

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
})
export const fetchProeuctById = async(id:string) => {
  const ret = await instance.get(`products/${id}`);
  return ret.data;
}

export const fetchProeuctsByKeyword = async (keyword:string) => {
  const ret = await instance.get(`/products`,{
    params: {
      name_like: keyword
    }
  });
  return ret.data;
}

export const createCartItem = (cartItem:Product) => {
  return instance.post('/carts',cartItem);
}

export const fetchCartItems= async () => {
  const ret =  await instance.get('/carts');
  const store = useMainStore();
  store.setCartItems(ret?.data);
}