import { BtnBurger, HeaderStyled, IconBurger, IconDots } from "./Header.styled";
import sprite from "../../assets/sprite.svg";

interface IProps {
  toggleAppBar: () => void;
}

const Header: React.FC<IProps> = ({ toggleAppBar }) => {
  return (
    <HeaderStyled>
      <BtnBurger onClick={() => toggleAppBar()}>
        <IconBurger>
          <use href={sprite + "#burger"} />
        </IconBurger>
      </BtnBurger>

      <IconDots>
        <use href={sprite + "#menu-dots-vertical"} />
      </IconDots>
    </HeaderStyled>
  );
};

export default Header;
