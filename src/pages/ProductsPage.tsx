import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import ProductsCardsList from "../components/productsCardsList/ProductsCardsList";
import ProductsTable from "../components/productsTable/ProductsTable";
import DataTitle from "../components/shared/DataTitle";
import Pagination from "../components/shared/pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getAllProductsThunk } from "../redux/products/productsOperations";
import {
  getAllProductsStore,
  getCountProductsStore,
} from "../redux/products/productsSelectors";

const ProductsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(getAllProductsStore);
  const countProducts = useAppSelector(getCountProductsStore);
  console.log(allProducts);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    dispatch(getAllProductsThunk({ page }));
  }, [dispatch, page]);

  if (allProducts.length < 0) return null;

  return (
    <>
      <DataTitle>Products</DataTitle>

      {isDesktop ? (
        <ProductsTable data={allProducts} />
      ) : (
        <ProductsCardsList data={allProducts} />
      )}

      <Pagination countData={countProducts} setPage={setPage} />
    </>
  );
};

export default ProductsPage;
