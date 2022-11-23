import styled from "styled-components";

export const WrapperPaginate = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background-color: #fff;
  margin-top: 2px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 0%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 0%);

  & .containerPaginate {
    display: flex;
  }

  & .pageItem {
    padding: 8px 16px;
    border: 2px solid #f9fafb;
    border-radius: 0.25px;

    &:not(:last-child) {
      margin-right: 4px;
    }
  }

  & .activePage {
    border: 2px solid #d1d5db;
  }
`;

export const PageDescr = styled.p`
  width: 100px;
  margin-left: auto;
`;
