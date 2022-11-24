import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import DataTitle from "../components/shared/DataTitle";
import Pagination from "../components/shared/pagination/Pagination";
import SuppliersCardsList from "../components/suppliersCardsList/SuppliersCardsList";
import SuppliersTable from "../components/suppliersTable/SuppliersTable";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getAllSuppliersThunk } from "../redux/suppliers/suppliersOperations";
import {
  getAllSuppliersStore,
  getCountSuppliersStore,
} from "../redux/suppliers/suppliersSelectors";

const SuppliersPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const allSuppliers = useAppSelector(getAllSuppliersStore);
  const countSuppliers = useAppSelector(getCountSuppliersStore);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    dispatch(getAllSuppliersThunk({ page }));
  }, [dispatch, page]);

  if (allSuppliers.length < 0) return null;

  return (
    <>
      <DataTitle>Suppliers</DataTitle>

      {isDesktop ? (
        <SuppliersTable data={allSuppliers} />
      ) : (
        <SuppliersCardsList data={allSuppliers} />
      )}

      <Pagination countData={countSuppliers} setPage={setPage} />
    </>
  );
};

export default SuppliersPage;
