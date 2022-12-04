import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import EmployeesCardsList from "./employeesCardsList/EmployeesCardsList";
import EmployeesTable from "./employeesTable/EmployeesTable";
import DataTitle from "../../shared/dataTitle/DataTitle";
import Pagination from "../../shared/pagination/Pagination";
import { getAllDataByCategory } from "../../../api/dataApi";
import { setStats } from "../../../store/reducers/statsSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";

const EmployeesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [allEmployees, setAllEmployees] = useState([]);
  const [countEmployees, setCountEmployees] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllDataByCategory({ category: "employees", page })
      .then((res) => {
        setAllEmployees(res.data);
        setCountEmployees(res.total);
        dispatch(setStats({ metrics: res.metrics, stats: res.stats }));
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, [dispatch, page]);

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
