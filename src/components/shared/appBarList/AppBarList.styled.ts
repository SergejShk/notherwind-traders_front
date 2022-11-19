import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BarTiltle = styled.p`
  font-weight: 400px;
  font-size: 12px;
  line-height: 16px;
  color: #9ca3af;
  padding: 0 12px 0;
  margin: 12px 0;
`;

export const BarNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const BarListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 12px;

  &.active {
    background-color: #374151;
  }
`;

export const BarIcon = styled.svg`
  fill: #d1d5db;
  width: 22px;
  height: 22px;
  margin-right: 14px;
`;

export const ItemName = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400px;
  color: #d1d5db;
`;
