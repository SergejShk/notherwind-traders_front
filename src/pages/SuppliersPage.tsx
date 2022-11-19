import { useState, useEffect } from "react";
import SuppliersCardsList from "../components/suppliersCardsList/SuppliersCardsList";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getAllSuppliersThunk } from "../redux/suppliers/suppliersOperations";
import { getAllSuppliersStore } from "../redux/suppliers/suppliersSelectors";

const SuppliersPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const allSuppliers = useAppSelector(getAllSuppliersStore);
  console.log(allSuppliers);

  useEffect(() => {
    dispatch(getAllSuppliersThunk({ page }));
  }, [dispatch, page]);

  return <>{allSuppliers && <SuppliersCardsList data={allSuppliers} />}</>;
};

export default SuppliersPage;
