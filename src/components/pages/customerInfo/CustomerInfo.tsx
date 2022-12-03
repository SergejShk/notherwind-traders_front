import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BtnGoBack from "../../shared/btnGoBack/BtnGoBack";
import DataInfoList from "../../shared/dataInfoList/DataInfoList";
import DataTitle from "../../shared/dataTitle/DataTitle";
import { getDataInfoById } from "../../../api/dataApi";

const CustomerInfoPage: React.FC = () => {
  const { customerId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getDataInfoById({
      category: "customers",
      id: customerId!,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch(console.log);
  }, [customerId]);

  if (!data) return <p>No such customer</p>;
  return (
    <>
      {Object.keys(data).length > 0 && (
        <>
          <DataTitle isIconInfo>Customer information</DataTitle>
          <DataInfoList data={data} />
          <BtnGoBack />
        </>
      )}
    </>
  );
};

export default CustomerInfoPage;
