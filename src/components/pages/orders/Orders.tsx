import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import OrdersCardsList from "./ordersCardsList/OrdersCardsList";
import OrdersTable from "./ordersTable/OrdersTable";
import DataTitle from "../../shared/dataTitle/DataTitle";
import Pagination from "../../shared/pagination/Pagination";
import { getAllDataByCategory } from "../../../api/dataApi";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setStats } from "../../../store/reducers/statsSlice";

const OrdersPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [allOrders, setAllOrders] = useState([]);
  const [countOrders, setCountOrders] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllDataByCategory({ category: "orders", page })
      .then((res) => {
        setAllOrders(res.data);
        setCountOrders(res.total);
        dispatch(setStats({ metrics: res.metrics, stats: res.stats }));
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, [dispatch, page]);

  if (allOrders.length < 0) return null;

  return (
    <>
      {isLoading && <p>Loading orders...</p>}
      {!isLoading && (
        <>
          <DataTitle isIconArrow>Orders</DataTitle>

          {!isDesktop && <OrdersCardsList data={allOrders} />}
          {isDesktop && <OrdersTable data={allOrders} />}

          <Pagination countData={countOrders} setPage={setPage} />
        </>
      )}
    </>
  );
};

export default OrdersPage;
