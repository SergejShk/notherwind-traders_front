import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import ProductsCardsList from "./productsCardsList/ProductsCardsList";
import ProductsTable from "./productsTable/ProductsTable";
import DataTitle from "../../shared/dataTitle/DataTitle";
import Pagination from "../../shared/pagination/Pagination";
import { getAllDataByCategory } from "../../../api/dataApi";

const ProductsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [countProducts, setCountProducts] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    getAllDataByCategory({ category: "products", page })
      .then((res) => {
        setAllProducts(res.data);
        setCountProducts(res.total);
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, [page]);

  if (allProducts.length < 0) return null;

  return (
    <>
      {isLoading && <p>Loading products...</p>}
      {!isLoading && (
        <>
          <DataTitle isIconArrow>Products</DataTitle>

          {!isDesktop && <ProductsCardsList data={allProducts} />}
          {isDesktop && <ProductsTable data={allProducts} />}

          <Pagination countData={countProducts} setPage={setPage} />
        </>
      )}
    </>
  );
};

export default ProductsPage;