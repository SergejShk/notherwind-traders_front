import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BtnGoBack from "../../shared/btnGoBack/BtnGoBack";
import DataInfoList from "../../shared/dataInfoList/DataInfoList";
import DataTitle from "../../shared/dataTitle/DataTitle";
import { getDataInfoById } from "../../../api/dataApi";

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
