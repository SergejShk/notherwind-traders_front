import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import OrdersCardsList from "../components/ordersCardsList/OrdersCardsList";
import OrdersTable from "../components/ordersTable/OrdersTable";
import DataTitle from "../components/shared/DataTitle";
import Pagination from "../components/shared/pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getAllOrdersThunk } from "../redux/orders/ordersOperations";
import {
  getAllOrdersStore,
  getCountOrdersStore,
} from "../redux/orders/ordersSelectors";

const OrdersPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const allOrders = useAppSelector(getAllOrdersStore);
  const countOrders = useAppSelector(getCountOrdersStore);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    dispatch(getAllOrdersThunk({ category: "orders", page }));
  }, [dispatch, page]);

  if (allOrders.length < 0) return null;

  return (
    <>
      <DataTitle>Orders</DataTitle>

      {isDesktop ? (
        <OrdersTable data={allOrders} />
      ) : (
        <OrdersCardsList data={allOrders} />
      )}

      <Pagination countData={countOrders} setPage={setPage} />
    </>
  );
};

export default OrdersPage;
