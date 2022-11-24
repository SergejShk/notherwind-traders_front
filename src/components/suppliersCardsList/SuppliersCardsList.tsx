import { SupplierType } from "../../types/suppliersTypes";
import Initials from "../shared/initials/Initials";
import DataTitle from "../shared/DataTitle";
import DataLink from "../shared/DataLink";
import {
  CardContent,
  CardContentItem,
  CardContentName,
  CardsItem,
} from "../shared/CardsList";

interface IProps {
  data: SupplierType[];
}

const SuppliersCardsList: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <DataTitle>Suppliers</DataTitle>

      <ul>
        {data.map((supplier) => (
          <CardsItem key={supplier.SupplierID}>
            <ul>
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
                  <CardContentName>Company</CardContentName>

                  <DataLink linkTo={supplier.SupplierID}>
                    {supplier.CompanyName}
                  </DataLink>
                </div>
              </CardContentItem>

              <CardContentItem>
                <CardContentName>Contact</CardContentName>
                <CardContent>{supplier.ContactName}</CardContent>
              </CardContentItem>

              <CardContentItem>
                <CardContentName>Title</CardContentName>
                <CardContent>{supplier.ContactTitle}</CardContent>
              </CardContentItem>

              <CardContentItem>
                <CardContentName>City</CardContentName>
                <CardContent>{supplier.City}</CardContent>
              </CardContentItem>

              <CardContentItem>
                <CardContentName>Country</CardContentName>
                <CardContent>{supplier.Country}</CardContent>
              </CardContentItem>
            </ul>
          </CardsItem>
        ))}
      </ul>
    </>
  );
};

export default SuppliersCardsList;
