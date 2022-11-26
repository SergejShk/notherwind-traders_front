import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import EmployeesCardsList from "../components/employeesCardsList/EmployeesCardsList";
import EmployeesTable from "../components/employeesTable/EmployeesTable";
import DataTitle from "../components/shared/DataTitle";
import Pagination from "../components/shared/pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getAllEmployeesThunk } from "../redux/employees/employeesOperations";
import {
  getAllEmployeesStore,
  getCountEmployeesStore,
} from "../redux/employees/employeesSelectors";

const EmployeesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const allEmployees = useAppSelector(getAllEmployeesStore);
  const countEmployees = useAppSelector(getCountEmployeesStore);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    dispatch(getAllEmployeesThunk({ category: "employees", page }));
  }, [dispatch, page]);

  if (allEmployees.length < 0) return null;

  return (
    <>
      <DataTitle isIconArrow>Employees</DataTitle>

      {isDesktop ? (
        <EmployeesTable data={allEmployees} />
      ) : (
        <EmployeesCardsList data={allEmployees} />
      )}

      <Pagination countData={countEmployees} setPage={setPage} />
    </>
  );
};

export default EmployeesPage;
