import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export const LinkData = styled(Link)`
  color: #2563eb;
  text-align: end;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

interface IProps {
  children: React.ReactNode;
  linkTo: string;
}

const DataLink: React.FC<IProps> = ({ children, linkTo }) => {
  const location = useLocation();

  return (
    <LinkData to={linkTo} state={{ from: location }}>
      {children}
    </LinkData>
  );
};

export default DataLink;
