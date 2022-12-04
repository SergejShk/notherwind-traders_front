import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import OrderProductsCardsList from "./orderProductsCardsList/OrderProductsCardsList";
import OrderProductsTable from "./orderProductTable/OrderProductsTable";
import BtnGoBack from "../../shared/btnGoBack/BtnGoBack";
import DataInfoList from "../../shared/dataInfoList/DataInfoList";
import DataTitle from "../../shared/dataTitle/DataTitle";
import { getDataInfoById } from "../../../api/dataApi";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setStats } from "../../../store/reducers/statsSlice";

const OrderInfoPage: React.FC = () => {
  const { orderId } = useParams();
  const [data, setData] = useState({});
  const [orderProducts, setOrderProducts] = useState([]);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    getDataInfoById({
      category: "orders",
      id: orderId!,
    })
      .then((res) => {
        setOrderProducts(res.data.orderProducts);
        setData(res.data.data);
        dispatch(setStats({ metrics: res.metrics, stats: res.stats }));
      })
      .catch(setError);
  }, [dispatch, orderId]);

  if (error) return <p>No such order</p>;
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
