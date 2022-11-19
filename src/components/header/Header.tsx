import { BtnBurger, HeaderStyled, IconBurger, IconDots } from "./Header.styled";
import sprite from "../../assets/sprite.svg";
import { useMediaQuery } from "react-responsive";
import Clock from "../shared/clock/Clock";

interface IProps {
  toggleAppBar: () => void;
}

const Header: React.FC<IProps> = ({ toggleAppBar }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <HeaderStyled>
      {!isDesktop ? (
        <>
          <BtnBurger onClick={() => toggleAppBar()}>
            <IconBurger>
              <use href={sprite + "#burger"} />
            </IconBurger>
          </BtnBurger>

          <IconDots>
            <use href={sprite + "#menu-dots-vertical"} />
          </IconDots>
        </>
      ) : (
        <Clock />
      )}
    </HeaderStyled>
  );
};

export default Header;
