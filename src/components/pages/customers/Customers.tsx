import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import CustomersCardsList from "./customersCardsList/CustomersCardsList";
import CustomersTable from "./customersTable/CustomersTable";
import DataTitle from "../../shared/dataTitle/DataTitle";
import Pagination from "../../shared/pagination/Pagination";
import { getAllDataByCategory } from "../../../api/dataApi";
import { setStats } from "../../../store/reducers/statsSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";

const CustomersPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [allCustomers, setAllCustomers] = useState([]);
  const [countCustomers, setCountCustomers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllDataByCategory({ category: "customers", page })
      .then((res) => {
        setAllCustomers(res.data);
        setCountCustomers(res.total);
        dispatch(setStats({ metrics: res.metrics, stats: res.stats }));
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, [dispatch, page]);

  if (allCustomers.length < 0) return null;

  return (
    <>
      {isLoading && <p>Loading customers...</p>}
      {!isLoading && (
        <>
          <DataTitle isIconArrow>Customers</DataTitle>

          {!isDesktop && <CustomersCardsList data={allCustomers} />}
          {isDesktop && <CustomersTable data={allCustomers} />}

          <Pagination countData={countCustomers} setPage={setPage} />
        </>
      )}
    </>
  );
};

export default CustomersPage;
