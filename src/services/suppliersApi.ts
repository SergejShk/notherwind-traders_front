import axios from "axios";
import { QuerySuppliers } from "../types/suppliersTypes";

const BASE_URL = "http://localhost:8080/app";

export const getAllSuppliers = async (query: QuerySuppliers) => {
  const { page } = query;
  const { data } = await axios.get(`${BASE_URL}/suppliers?page=${page}`);

  return data;
};
