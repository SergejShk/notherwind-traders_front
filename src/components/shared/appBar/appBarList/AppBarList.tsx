import {
  BarIcon,
  BarNav,
  BarListItem,
  BarTiltle,
  ItemName,
  NavItem,
} from "./AppBarList.styled";

interface Item {
  icon: string;
  name: string;
  linkTo: string;
}

interface IProps {
  itemsData: {
    title: string;
    items: Item[];
  };
}

const AppBarList: React.FC<IProps> = ({ itemsData }) => {
  return (
    <>
      <BarTiltle>{itemsData.title}</BarTiltle>

      <BarNav>
        {itemsData.items.map((item: Item) => (
          <BarListItem key={item.name}>
            <NavItem to={item.linkTo}>
              <BarIcon>
                <use href={"/assets/sprite.svg" + item.icon} />
              </BarIcon>

              <ItemName>{item.name}</ItemName>
            </NavItem>
          </BarListItem>
        ))}
      </BarNav>
    </>
  );
};

export default AppBarList;
