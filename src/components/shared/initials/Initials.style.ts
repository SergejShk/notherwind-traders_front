import styled from "styled-components";

export const InitialsStyled = styled.span`
  color: #fff;
  border-radius: 50%;
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 24px;

  @media screen and (min-width: 1024px) {
    width: 24px;
    height: 24px;
    font-size: 12px;
    margin-bottom: 0;
  }
`;
