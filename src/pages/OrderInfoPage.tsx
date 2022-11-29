import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import OrderProductsCardsList from "../components/orderProducts/OrderProductsCardsList";
import OrderProductsTable from "../components/orderProducts/OrderProductsTable";
import BtnGoBack from "../components/shared/BtnGoBack";
import DataInfoList from "../components/shared/DataInfoList";
import DataTitle from "../components/shared/DataTitle";
import { getDataInfoById } from "../services/dataApi";

const OrderInfoPage: React.FC = () => {
  const { orderId } = useParams();
  const [data, setData] = useState({});
  const [orderProducts, setOrderProducts] = useState([]);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    getDataInfoById({
      category: "orders",
      id: orderId!,
    })
      .then((res) => {
        setOrderProducts(res.orderProducts);
        setData(res.data);
      })
      .catch(console.log);
  }, [orderId]);

  if (!data) return <p>No such order</p>;
  return (
    <>
      {Object.keys(data).length > 0 && (
        <>
          <DataTitle isIconInfo>Order information</DataTitle>
          <DataInfoList data={data} />
          <DataTitle>Products in order</DataTitle>

          {!isDesktop && <OrderProductsCardsList data={orderProducts} />}
          {isDesktop && <OrderProductsTable data={orderProducts} />}

          <BtnGoBack />
        </>
      )}
    </>
  );
};

export default OrderInfoPage;
