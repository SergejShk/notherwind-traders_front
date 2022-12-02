import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BtnGoBack from "../components/shared/BtnGoBack";
import DataInfoList from "../components/shared/DataInfoList";
import DataTitle from "../components/shared/DataTitle";
import { getDataInfoById } from "../services/dataApi";

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
