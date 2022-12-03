import styled from "styled-components";

export const Box = styled.div`
  min-height: 48px;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0 16px;
  border-radius: 4px 4px 0 0;
  border: 1px solid #eff0f1;
`;

export const Title = styled.h2`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
`;

export const IconArrow = styled.svg`
  width: 20px;
  height: 20px;
  transform: rotate(32deg);
  padding-top: 8px;
  margin-left: auto;
`;

export const IconInfo = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
