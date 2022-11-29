import styled from "styled-components";
import sprite from "../../assets/sprite.svg";

const Box = styled.div`
  min-height: 48px;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0 16px;
  border-radius: 4px 4px 0 0;
  border: 1px solid #eff0f1;
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
  margin-left: auto;
`;

const IconInfo = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

interface IProps {
  children: React.ReactNode;
  isIconArrow?: boolean;
  isIconInfo?: boolean;
}

const DataTitle: React.FC<IProps> = ({ children, isIconArrow, isIconInfo }) => {
  return (
    <Box>
      {isIconInfo && (
        <IconInfo>
          <use href={sprite + "#icon-info"} />
        </IconInfo>
      )}

      <Title>{children}</Title>

      {isIconArrow && (
        <IconArrow>
          <use href={sprite + "#icon-rotate-right"} />
        </IconArrow>
      )}
    </Box>
  );
};

export default DataTitle;
