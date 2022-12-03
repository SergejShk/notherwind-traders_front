import styled from "styled-components";

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 0%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 0%);
`;

export const TableHead = styled.thead`
  background-color: #fff;
`;

export const TableHeader = styled.th`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #000;
  padding: 8px 12px;
  text-align: start;
`;

export const TableBodyRow = styled.tr`
  background-color: #f9fafb;

  &:nth-child(even) {
    background-color: #fff;
  }

  &:hover {
    background-color: #eff2f6;
  }
`;

export const TableData = styled.td`
  padding: 8px 12px;
  font-size: 16px;
  line-height: 24px;
  color: #000;
`;
