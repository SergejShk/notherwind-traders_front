import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import SuppliersCardsList from "./suppliersCardsList/SuppliersCardsList";
import DataTitle from "../../shared/dataTitle/DataTitle";
import Table from "../../shared/table/Table";
import Pagination from "../../shared/pagination/Pagination";

import { getAllDataByCategory } from "../../../api/dataApi";

import { setStats } from "../../../store/reducers/statsSlice";

import { useAppDispatch } from "../../../hooks/reduxHooks";
import useSuppliersTable from "../../../hooks/useSuppliersTable";

const Suppliers = () => {
    const {
        columns,
        handleRowClick,
    } = useSuppliersTable()

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
                    {isDesktop && (
                        <Table 
                            data={allSuppliers}
                            columns={columns}
                            onRowClick={handleRowClick}
                        />)}

                    <Pagination countData={countSuppliers} setPage={setPage} />
                </>
            )}
        </>
    );
}

export default Suppliers;