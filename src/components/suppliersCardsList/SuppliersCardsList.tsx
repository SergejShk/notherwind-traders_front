import { SupplierType } from "../../types/suppliersTypes";
import {
  CardContentItem,
  CardContentList,
  CardsItemSupplier,
  CardsListSupplier,
  Content,
  ContentName,
} from "./SuppliersCardsList.style";

import Initials from "../shared/initials/Initials";
import DataTitle from "../shared/DataTitle";
import DataLink from "../shared/DataLink";

interface IProps {
  data: SupplierType[];
}

const SuppliersCardsList: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <DataTitle>Suppliers</DataTitle>

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

                  <DataLink linkTo={supplier.SupplierID}>
                    {supplier.CompanyName}
                  </DataLink>
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
