import axios from "axios";
import { QueryAllDataByCategoryType } from "../types/queryTypes";

// const BASE_URL = "http://localhost:8080/api";
const BASE_URL = "https://notherwind-traders-back.vercel.app/api";

export const getAllDataByCategory = async (
  query: QueryAllDataByCategoryType
) => {
  const { category, page } = query;
  const { data } = await axios.get(`${BASE_URL}/${category}?page=${page}`);

  return data;
};
