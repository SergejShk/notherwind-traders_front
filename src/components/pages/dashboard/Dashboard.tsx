import styled from "styled-components";
import Statistic from "./statistic/Statistic";

export const Wrapper = styled.div`
  padding: 24px;
`;

const DashboardPage: React.FC = () => {
  return (
    <Wrapper>
      <Statistic />
    </Wrapper>
  );
};

export default DashboardPage;
