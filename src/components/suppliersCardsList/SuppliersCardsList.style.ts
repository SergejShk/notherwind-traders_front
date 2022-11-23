import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardsListSupplier = styled.ul``;

export const CardsItemSupplier = styled.li`
  box-shadow: 0px 1px 1px rgb(0 0 0 / 0%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 0%);

  &:not(:last-child) {
    margin-bottom: 4px;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 0%), 0px 4px 4px rgb(0 0 0 / 6%),
      1px 4px 6px rgb(0 0 0 / 0%);
  }
`;

export const CardContentList = styled.ul``;

export const CardContentItem = styled.li`
  min-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 16px;

  &:not(:last-child) {
    margin-bottom: 1px;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 0%), 0px 4px 4px rgb(0 0 0 / 6%),
      1px 4px 6px rgb(0 0 0 / 0%);
  }
`;

export const ContentName = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-right: 27px;
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;
