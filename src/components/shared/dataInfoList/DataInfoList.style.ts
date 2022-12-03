import styled from "styled-components";

export const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 24px;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 0%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 0%);
`;

export const InfoList = styled.ul`
  flex-basis: calc((100% - 15px) / 2);
`;

export const InfoItem = styled.li`
  font-size: 16px;
  line-height: 24px;
  color: #000;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const InfoItemName = styled.p`
  font-weight: 700;
  margin-bottom: 8px;
`;
