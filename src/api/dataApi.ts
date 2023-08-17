import axios from "axios";
import {
  QueryAllDataByCategoryType,
  QueryDataInfoByIdType,
  QueryBySearchType,
} from "../types/queryTypes";

// const BASE_URL = "http://localhost:8080/api";
// const BASE_URL = "https://notherwind-traders-back.vercel.app/api";
const BASE_URL = "https://northwind-drizzle.vercel.app/api";

export const getAllDataByCategory = async (
  query: QueryAllDataByCategoryType
) => {
  const { category, page } = query;
  const { data } = await axios.get(`${BASE_URL}/${category}?page=${page}`);

  return data;
};

export const getDataInfoById = async (query: QueryDataInfoByIdType) => {
  const { category, id } = query;
  const { data } = await axios.get(`${BASE_URL}/${category}/${id}`);

  return data;
};

export const getDataBySearch = async (q: QueryBySearchType) => {
  const { category, query } = q;
  const { data } = await axios.get(`${BASE_URL}/${category}/search/${query}`);

  return data;
};
