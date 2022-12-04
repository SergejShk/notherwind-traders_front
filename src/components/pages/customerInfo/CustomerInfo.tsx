import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BtnGoBack from "../../shared/btnGoBack/BtnGoBack";
import DataInfoList from "../../shared/dataInfoList/DataInfoList";
import DataTitle from "../../shared/dataTitle/DataTitle";
import { getDataInfoById } from "../../../api/dataApi";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setStats } from "../../../store/reducers/statsSlice";

const CustomerInfoPage: React.FC = () => {
  const { customerId } = useParams();
  const [data, setData] = useState({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    getDataInfoById({
      category: "customers",
      id: customerId!,
    })
      .then((res) => {
        setData(res.data);
        dispatch(setStats({ metrics: res.metrics, stats: res.stats }));
      })
      .catch(console.log);
  }, [customerId, dispatch]);

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
