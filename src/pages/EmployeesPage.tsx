import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import EmployeesCardsList from "../components/employeesCardsList/EmployeesCardsList";
import EmployeesTable from "../components/employeesTable/EmployeesTable";
import DataTitle from "../components/shared/DataTitle";
import Pagination from "../components/shared/pagination/Pagination";
import { getAllDataByCategory } from "../services/dataApi";

const EmployeesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [allEmployees, setAllEmployees] = useState([]);
  const [countEmployees, setCountEmployees] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    getAllDataByCategory({ category: "employees", page })
      .then((res) => {
        setAllEmployees(res.data);
        setCountEmployees(res.total);
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, [page]);

  if (allEmployees.length < 0) return null;

  return (
    <>
      {isLoading && <p>Loading employees...</p>}
      {!isLoading && (
        <>
          <DataTitle isIconArrow>Employees</DataTitle>

          {!isDesktop && <EmployeesCardsList data={allEmployees} />}
          {isDesktop && <EmployeesTable data={allEmployees} />}

          <Pagination countData={countEmployees} setPage={setPage} />
        </>
      )}
    </>
  );
};

export default EmployeesPage;
