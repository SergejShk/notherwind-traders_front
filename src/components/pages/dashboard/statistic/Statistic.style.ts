import styled from "styled-components";

export const WrapperStat = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const BlockStat = styled.div`
  flex-basis: calc((100% - 16px) / 2);
`;

export const NameBlock = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: #000;
`;

export const Stat = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #1f2937;
`;

export const SmallText = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #1f2937;
`;

export const AccentLog = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #9ca3af;
  margin-top: 8px;
`;

export const Log = styled.p`
  font-family: monospace;
  font-size: 14px;
  line-height: 20px;
  color: #000;
`;
