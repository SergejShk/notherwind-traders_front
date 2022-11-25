import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import CustomersCardsList from "../components/customersCardsList/CustomersCardsList";
import CustomersTable from "../components/customersTable/CustomersTable";
import DataTitle from "../components/shared/DataTitle";
import Pagination from "../components/shared/pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getAllCustomersThunk } from "../redux/customers/customersOperations";
import {
  getAllCustomersStore,
  getCountCustomersStore,
} from "../redux/customers/customersSelectors";

const CustomersPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const allCustomers = useAppSelector(getAllCustomersStore);
  const countCustomers = useAppSelector(getCountCustomersStore);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    dispatch(getAllCustomersThunk({ category: "customers", page }));
  }, [dispatch, page]);

  if (allCustomers.length < 0) return null;

  return (
    <>
      <DataTitle>Customers</DataTitle>

      {isDesktop ? (
        <CustomersTable data={allCustomers} />
      ) : (
        <CustomersCardsList data={allCustomers} />
      )}

      <Pagination countData={countCustomers} setPage={setPage} />
    </>
  );
};

export default CustomersPage;
