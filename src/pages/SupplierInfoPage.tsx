import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BtnGoBack from "../components/shared/BtnGoBack";
import DataInfoList from "../components/shared/DataInfoList";
import DataTitle from "../components/shared/DataTitle";
import { getDataInfoById } from "../services/dataApi";

const SupplierInfoPage: React.FC = () => {
  const { supplierId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getDataInfoById({
      category: "suppliers",
      id: supplierId!,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch(console.log);
  }, [supplierId]);

  if (!data) return <p>No such supplier</p>;
  return (
    <>
      {Object.keys(data).length > 0 && (
        <>
          <DataTitle isIconInfo>Supplier information</DataTitle>
          <DataInfoList data={data} />
          <BtnGoBack />
        </>
      )}
    </>
  );
};

export default SupplierInfoPage;
