import AppBarList from "../shared/AppBarList";
import {
  AppBarAccentTitle,
  AppBarContainer,
  AppBarHeading,
  AppBarTitle,
} from "./AppBar.styled";
import { AppBarBackoffice, AppBarGeneral } from "../../utils/appBarContent";

const AppBar: React.FC = () => {
  return (
    <AppBarContainer>
      <AppBarHeading>
        <AppBarAccentTitle>
          Northwind <AppBarTitle>Traders</AppBarTitle>
        </AppBarAccentTitle>
      </AppBarHeading>

      <AppBarList itemsData={AppBarGeneral} />
      <AppBarList itemsData={AppBarBackoffice} />
    </AppBarContainer>
  );
};

export default AppBar;
