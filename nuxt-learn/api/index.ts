import axios from "axios";
interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
};
const instance = axios.create({
  baseURL: 'http://localhost:3000/'
})

export const fetchProeuctById = async(id:string) => {
  const ret = await instance.get(`products/${id}`);
  return ret.data;
}

export const fetchProeuctsByKeyword = (keyword:string) => {
  return instance.get(`/products`,{
    params: {
      name_like: keyword
    }
  });
}