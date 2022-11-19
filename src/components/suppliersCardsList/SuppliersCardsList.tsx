import { SupplierType } from "../../types/suppliersTypes";
import {
  CardContentItem,
  CardContentList,
  CardsItemSupplier,
  CardsListSupplier,
  CardTitle,
  CardTitleBox,
  Content,
  ContentName,
  IconArrow,
  SupplierLink,
} from "./SuppliersCardsList.style";
import sprite from "../../assets/sprite.svg";
import Initials from "../shared/initials/Initials";

interface IProps {
  data: SupplierType[];
}

const SuppliersCardsList: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <CardTitleBox>
        <CardTitle>Suppliers</CardTitle>
        <IconArrow>
          <use href={sprite + "#icon-rotate-right"} />
        </IconArrow>
      </CardTitleBox>

      <CardsListSupplier>
        {data.map((supplier) => (
          <CardsItemSupplier key={supplier.SupplierID}>
            <CardContentList>
              <CardContentItem
                style={{ flexDirection: "column", padding: "12px 0" }}
              >
                <Initials fullName={supplier.ContactName} />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "calc(100% - 32px)",
                  }}
                >
                  <ContentName>Company</ContentName>
                  <SupplierLink to={supplier.SupplierID}>
                    {supplier.CompanyName}
                  </SupplierLink>
                </div>
              </CardContentItem>

              <CardContentItem>
                <ContentName>Contact</ContentName>
                <Content>{supplier.ContactName}</Content>
              </CardContentItem>

              <CardContentItem>
                <ContentName>Title</ContentName>
                <Content>{supplier.ContactTitle}</Content>
              </CardContentItem>

              <CardContentItem>
                <ContentName>City</ContentName>
                <Content>{supplier.City}</Content>
              </CardContentItem>

              <CardContentItem>
                <ContentName>Country</ContentName>
                <Content>{supplier.Country}</Content>
              </CardContentItem>
            </CardContentList>
          </CardsItemSupplier>
        ))}
      </CardsListSupplier>
    </>
  );
};

export default SuppliersCardsList;
