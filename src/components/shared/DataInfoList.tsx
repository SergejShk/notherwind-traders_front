import styled from "styled-components";

const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 24px;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 0%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 0%);
`;

const InfoList = styled.ul`
  flex-basis: calc((100% - 15px) / 2);
`;

const InfoItem = styled.li`
  font-size: 16px;
  line-height: 24px;
  color: #000;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const InfoItemName = styled.p`
  font-weight: 700;
  margin-bottom: 8px;
`;

const InfoItemData = styled.p``;

interface IProps {
  data: {};
}

const DataInfoList: React.FC<IProps> = ({ data }) => {
  const filteredData = Object.entries(data).filter(
    (entry) => !entry.includes("") && !entry[0].includes("ID")
  );

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

  return (
    <InfoBox>
      <InfoList>
        {firstList.map((el, idx) => (
          <InfoItem key={idx}>
            <InfoItemName>{splitCamelCaseStr(el[0])}</InfoItemName>
            <InfoItemData>{el[1]}</InfoItemData>
          </InfoItem>
        ))}
      </InfoList>

      <InfoList>
        {secondList.map((el, idx) => (
          <InfoItem key={idx}>
            <InfoItemName>{splitCamelCaseStr(el[0])}</InfoItemName>
            <InfoItemData>{el[1]}</InfoItemData>
          </InfoItem>
        ))}
      </InfoList>
    </InfoBox>
  );
};

export default DataInfoList;
