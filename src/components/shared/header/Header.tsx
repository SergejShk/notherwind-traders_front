import { BtnBurger, HeaderStyled, IconBurger, IconDots } from "./Header.styled";
import { useMediaQuery } from "react-responsive";
import Clock from "./clock/Clock";

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
              <use href="/assets/sprite.svg#burger" />
            </IconBurger>
          </BtnBurger>

          <IconDots>
            <use href="/assets/sprite.svg#menu-dots-vertical" />
          </IconDots>
        </>
      ) : (
        <Clock />
      )}
    </HeaderStyled>
  );
};

export default Header;
