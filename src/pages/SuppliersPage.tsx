import { useState, useEffect } from "react";
import Pagination from "../components/shared/pagination/Pagination";
import SuppliersCardsList from "../components/suppliersCardsList/SuppliersCardsList";
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
  console.log(countSuppliers, allSuppliers);

  useEffect(() => {
    dispatch(getAllSuppliersThunk({ page }));
  }, [dispatch, page]);

  return allSuppliers.length > 0 ? (
    <>
      <SuppliersCardsList data={allSuppliers} />
      <Pagination countData={countSuppliers} setPage={setPage} />
    </>
  ) : null;
};

export default SuppliersPage;
