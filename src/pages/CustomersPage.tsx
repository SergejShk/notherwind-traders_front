import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import CustomersCardsList from "../components/customersCardsList/CustomersCardsList";
import CustomersTable from "../components/customersTable/CustomersTable";
import DataTitle from "../components/shared/DataTitle";
import Pagination from "../components/shared/pagination/Pagination";
import { getAllDataByCategory } from "../services/dataApi";

const CustomersPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [allCustomers, setAllCustomers] = useState([]);
  const [countCustomers, setCountCustomers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    getAllDataByCategory({ category: "customers", page })
      .then((res) => {
        setAllCustomers(res.data);
        setCountCustomers(res.total);
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, [page]);

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
