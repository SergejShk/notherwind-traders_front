import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import DataTitle from "../components/shared/DataTitle";
import Pagination from "../components/shared/pagination/Pagination";
import SuppliersCardsList from "../components/suppliersCardsList/SuppliersCardsList";
import SuppliersTable from "../components/suppliersTable/SuppliersTable";
import { getAllDataByCategory } from "../services/dataApi";

const SuppliersPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [allSuppliers, setAllSuppliers] = useState([]);
  const [countSuppliers, setCountSuppliers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    getAllDataByCategory({ category: "suppliers", page })
      .then((res) => {
        setAllSuppliers(res.data);
        setCountSuppliers(res.total);
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, [page]);

  if (allSuppliers.length < 0) return null;

  return (
    <>
      {isLoading && <p>Loading suppliers...</p>}
      {!isLoading && (
        <>
          <DataTitle isIconArrow>Suppliers</DataTitle>

          {!isDesktop && <SuppliersCardsList data={allSuppliers} />}
          {isDesktop && <SuppliersTable data={allSuppliers} />}

          <Pagination countData={countSuppliers} setPage={setPage} />
        </>
      )}
    </>
  );
};

export default SuppliersPage;
