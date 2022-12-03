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

  @media screen and (min-width: 1024px) {
    position: static;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    width: calc(100vw - 240px);
  }
`;

export const WrapperContent = styled.div`
  min-height: 100%;
  background-color: #f9fafb;
  padding: 24px;
`;
