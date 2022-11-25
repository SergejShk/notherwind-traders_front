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
    flex-wrap: wrap;
  }

  & .pageItem {
    border: 2px solid #f9fafb;
    border-radius: 0.25px;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 4px;
    }
  }

  & .link {
    display: block;
    padding: 8px 16px;
  }

  & .activePage {
    border: 2px solid #d1d5db;
  }

  & .break {
    margin-right: 4px;

    & a {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
`;

export const PageDescr = styled.p`
  font-size: 12px;
  line-height: 24px;
  color: #000000;
  width: 80px;
  margin-left: auto;
  text-align: end;
`;
