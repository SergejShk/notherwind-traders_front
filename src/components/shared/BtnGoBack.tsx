import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  padding: 24px;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 0%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 0%);
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
