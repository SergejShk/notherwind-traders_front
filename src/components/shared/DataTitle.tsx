import styled from "styled-components";
import sprite from "../../assets/sprite.svg";

const Box = styled.div`
  min-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-bottom: 2px;
  padding: 0 16px;
`;

const Title = styled.h2`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
`;

const IconArrow = styled.svg`
  width: 20px;
  height: 20px;
  transform: rotate(32deg);
  padding-top: 8px;
`;

interface IProps {
  children: React.ReactNode;
}

const DataTitle: React.FC<IProps> = ({ children }) => {
  return (
    <Box>
      <Title>{children}</Title>
      <IconArrow>
        <use href={sprite + "#icon-rotate-right"} />
      </IconArrow>
    </Box>
  );
};

export default DataTitle;
