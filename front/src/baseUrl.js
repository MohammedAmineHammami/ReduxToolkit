import axios from "axios";

export const axiosReq = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});
