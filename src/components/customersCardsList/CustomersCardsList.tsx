import { CustomerType } from "../../types/customersTypes";
import {
  CardContent,
  CardContentItem,
  CardContentName,
  CardsItem,
} from "../shared/CardsList";
import DataLink from "../shared/DataLink";
import Initials from "../shared/initials/Initials";

interface IProps {
  data: CustomerType[];
}

const CustomersCardsList: React.FC<IProps> = ({ data }) => {
  return (
    <ul>
      {data.map((customer) => (
        <CardsItem key={customer.CustomerID}>
          <ul>
            <CardContentItem
              style={{ flexDirection: "column", padding: "12px 0" }}
            >
              <Initials fullName={customer.ContactName} />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "calc(100% - 32px)",
                }}
              >
                <CardContentName>Company</CardContentName>

                <DataLink linkTo={customer.CustomerID}>
                  {customer.CompanyName}
                </DataLink>
              </div>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Contact</CardContentName>
              <CardContent>{customer.ContactName}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Title</CardContentName>
              <CardContent>{customer.ContactTitle}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>City</CardContentName>
              <CardContent>{customer.City}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Country</CardContentName>
              <CardContent>{customer.Country}</CardContent>
            </CardContentItem>
          </ul>
        </CardsItem>
      ))}
    </ul>
  );
};

export default CustomersCardsList;
