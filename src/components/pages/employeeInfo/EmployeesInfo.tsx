import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BtnGoBack from "../../shared/btnGoBack/BtnGoBack";
import DataInfoList from "../../shared/dataInfoList/DataInfoList";
import DataTitle from "../../shared/dataTitle/DataTitle";
import { getDataInfoById } from "../../../api/dataApi";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setStats } from "../../../store/reducers/statsSlice";

const EmployeesInfoPage: React.FC = () => {
  const { employeeId } = useParams();
  const [data, setData] = useState({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    getDataInfoById({
      category: "employees",
      id: employeeId!,
    })
      .then((res) => {
        setData(res.data);
        dispatch(setStats({ metrics: res.metrics, stats: res.stats }));
      })
      .catch(console.log);
  }, [dispatch, employeeId]);

  if (!data) return <p>No such employee</p>;
  return (
    <>
      {Object.keys(data).length > 0 && (
        <>
          <DataTitle isIconInfo>Employee information</DataTitle>
          <DataInfoList data={data} />
          <BtnGoBack />
        </>
      )}
    </>
  );
};

export default EmployeesInfoPage;
