import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  padding: 24px;
  background-color: #fff;
  margin-top: 1px;
`;

const Button = styled(Link)`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ef4444;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
`;

const BtnGoBack: React.FC = () => {
  const { state } = useLocation();

  return (
    <Box>
      <Button to={state?.from ?? "/"}>Go back</Button>
    </Box>
  );
};

export default BtnGoBack;
