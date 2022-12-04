import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import DataTitle from "../../shared/dataTitle/DataTitle";
import Pagination from "../../shared/pagination/Pagination";
import SuppliersCardsList from "./suppliersCardsList/SuppliersCardsList";
import SuppliersTable from "./suppliersTable/SuppliersTable";
import { getAllDataByCategory } from "../../../api/dataApi";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setStats } from "../../../store/reducers/statsSlice";

const SuppliersPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [allSuppliers, setAllSuppliers] = useState([]);
  const [countSuppliers, setCountSuppliers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllDataByCategory({ category: "suppliers", page })
      .then((res) => {
        setAllSuppliers(res.data);
        setCountSuppliers(res.total);
        dispatch(setStats({ metrics: res.metrics, stats: res.stats }));
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, [dispatch, page]);

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
