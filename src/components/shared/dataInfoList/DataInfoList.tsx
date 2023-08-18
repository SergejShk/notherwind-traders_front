import { useLocation } from "react-router-dom";

import DataLink from "../dataLink/DataLink";
import {
  InfoBox,
  InfoItem,
  InfoItemName,
  InfoList,
} from "./DataInfoList.style";

interface IProps {
  data: any;
}

const DataInfoList: React.FC<IProps> = ({ data }) => {
  const { pathname } = useLocation();

  let filteredData = Object.entries(data).filter(
    (entry) => !entry.includes("") && !entry[0].includes("ID")
  );

  if (pathname.includes("/orders/"))
    filteredData = [Object.entries(data)[1], ...filteredData];

  let firstList: any[] = [];
  let secondList: any[] = [];

  filteredData.forEach((entry, idx) => {
    const middleData = Math.ceil(filteredData.length / 2);

    if (idx < middleData) {
      firstList.push(entry);
    } else {
      secondList.push(entry);
    }
  });

  const splitCamelCaseStr = (str: string) =>
    str.replace(/([a-z](?=[A-Z]))/g, "$1 ");

  const getLink = (link: string) => {
    const id = data[link + "ID"];
    const result = `/${link.toLowerCase()}s/${id}`;

    if (!Object.keys(data).includes(link + "ID"))
      console.log(Object.keys(data));
    return result;
  };

  console.log('data', data)

  return (
    <InfoBox>
      <InfoList>
        {firstList.map((el, idx) => (
          <InfoItem key={idx}>
            {el[0] === "Supplier" && (
              <>
                <InfoItemName>{splitCamelCaseStr(el[0])}</InfoItemName>
                <p>
                  <DataLink linkTo={getLink(el[0])}>
                    {splitCamelCaseStr(el[1])}
                  </DataLink>
                </p>
              </>
            )}

            {el[0] === "CustomerID" && (
              <>
                <InfoItemName>
                  {splitCamelCaseStr(el[0]).replace("ID", "Id")}
                </InfoItemName>
                <p>
                  <DataLink linkTo={`/customers/${el[1]}`}>
                    {splitCamelCaseStr(el[1])}
                  </DataLink>
                </p>
              </>
            )}

            {el[0] !== "Supplier" && el[0] !== "CustomerID" && (
              <>
                <InfoItemName>{splitCamelCaseStr(el[0])}</InfoItemName>
                <p>{el[1]}</p>
              </>
            )}
          </InfoItem>
        ))}
      </InfoList>

      <InfoList>
        {secondList.map((el, idx) => (
          <InfoItem key={idx}>
            {el[0] === "ReportsTo" && (
              <>
                <InfoItemName>{splitCamelCaseStr(el[0])}</InfoItemName>
                <p>
                  <DataLink linkTo={`/employees/${data.ReportsTo}`}>
                    {el[1]}
                  </DataLink>
                </p>
              </>
            )}

            {el[0] !== "ReportsTo" && (
              <>
                <InfoItemName>{splitCamelCaseStr(el[0])}</InfoItemName>
                <p>{el[1]}</p>
              </>
            )}
          </InfoItem>
        ))}
      </InfoList>
    </InfoBox>
  );
};

export default DataInfoList;
