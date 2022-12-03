import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BtnGoBack from "../../shared/btnGoBack/BtnGoBack";
import DataInfoList from "../../shared/dataInfoList/DataInfoList";
import DataTitle from "../../shared/dataTitle/DataTitle";
import { getDataInfoById } from "../../../api/dataApi";

const ProductInfoPage: React.FC = () => {
  const { productId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getDataInfoById({
      category: "products",
      id: productId!,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch(console.log);
  }, [productId]);

  if (!data) return <p>No such product</p>;
  return (
    <>
      {Object.keys(data).length > 0 && (
        <>
          <DataTitle isIconInfo>Product information</DataTitle>
          <DataInfoList data={data} />
          <BtnGoBack />
        </>
      )}
    </>
  );
};

export default ProductInfoPage;
