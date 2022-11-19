import { InitialsStyled } from "./Initials.style";

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

interface IProps {
  fullName: string;
}

const Initials: React.FC<IProps> = ({ fullName }) => {
  const arrInitials = fullName.trim().split(" ");
  const firstLitter = fullName[0];
  const secondLitter = arrInitials[arrInitials.length - 1][0];

  console.log(fullName, firstLitter, secondLitter);

  return (
    <InitialsStyled style={{ backgroundColor: getRandomHexColor() }}>
      {firstLitter}
      {secondLitter}
    </InitialsStyled>
  );
};

export default Initials;
