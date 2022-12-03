import { Box, IconArrow, IconInfo, Title } from "./DataTitle.style";

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
          <use href="/assets/sprite.svg#icon-info" />
        </IconInfo>
      )}

      <Title>{children}</Title>

      {isIconArrow && (
        <IconArrow>
          <use href="/assets/sprite.svg#icon-rotate-right" />
        </IconArrow>
      )}
    </Box>
  );
};

export default DataTitle;
