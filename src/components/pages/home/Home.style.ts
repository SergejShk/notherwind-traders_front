import styled from "styled-components";

export const Box = styled.div`
  padding: 24px;
`;

export const Title = styled.p`
  font-size: 24px;
  line-height: 32px;
  color: #000;
  margin-bottom: 8px;
`;

export const LogoImg = styled.img`
  display: block;
  width: 384px;
  float: right;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const LinkText = styled.a`
  color: #2563eb;
`;
