import styled from "styled-components";

export const MainWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -240px;
  display: flex;
  overflow: hidden;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.isOpen {
    transform: translateX(240px);
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
