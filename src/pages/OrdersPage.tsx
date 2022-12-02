import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import OrdersCardsList from "../components/ordersCardsList/OrdersCardsList";
import OrdersTable from "../components/ordersTable/OrdersTable";
import DataTitle from "../components/shared/DataTitle";
import Pagination from "../components/shared/pagination/Pagination";
import { getAllDataByCategory } from "../services/dataApi";

const OrdersPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [allOrders, setAllOrders] = useState([]);
  const [countOrders, setCountOrders] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    getAllDataByCategory({ category: "orders", page })
      .then((res) => {
        setAllOrders(res.data);
        setCountOrders(res.total);
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, [page]);

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
