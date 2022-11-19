import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 17px 18px 13px;
  border-bottom: 1px solid #f3f4f6;

  @media screen and (min-width: 1024px) {
    padding: 18px 12px 17px 36px;
  }
`;

export const BtnBurger = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  height: 20px;
  width: 20px;
  background-color: transparent;
`;

export const IconBurger = styled.svg`
  height: 17px;
  width: 20px;
  fill: #000000;
`;

export const IconDots = styled.svg`
  height: 16px;
  width: 20px;
  fill: #000000;
`;
