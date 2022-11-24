import axios from "axios";
import { QueryProducts } from "../types/productsTypes";

// const BASE_URL = "http://localhost:8080/api";
const BASE_URL = "https://notherwind-traders-back.vercel.app/api";

export const getAllProducts = async (query: QueryProducts) => {
  const { page } = query;
  const { data } = await axios.get(`${BASE_URL}/products?page=${page}`);

  return data;
};
