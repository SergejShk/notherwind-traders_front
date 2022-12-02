import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BtnGoBack from "../components/shared/BtnGoBack";
import DataInfoList from "../components/shared/DataInfoList";
import DataTitle from "../components/shared/DataTitle";
import { getDataInfoById } from "../services/dataApi";

const EmployeesInfoPage: React.FC = () => {
  const { employeeId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getDataInfoById({
      category: "employees",
      id: employeeId!,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch(console.log);
  }, [employeeId]);

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
