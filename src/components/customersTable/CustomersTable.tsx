import { CustomerType } from "../../types/customersTypes";
import DataLink from "../shared/DataLink";
import {
  TableBodyRow,
  TableData,
  TableHead,
  TableHeader,
  TableStyled,
} from "../shared/DataTable";
import Initials from "../shared/initials/Initials";

interface IProps {
  data: CustomerType[];
}

const CustomersTable: React.FC<IProps> = ({ data }) => {
  return (
    <TableStyled>
      <TableHead>
        <tr>
          <TableHeader></TableHeader>
          <TableHeader>Company</TableHeader>
          <TableHeader>Contact</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>City</TableHeader>
          <TableHeader>Country</TableHeader>
        </tr>
      </TableHead>

      <tbody>
        {data.map((customer) => (
          <TableBodyRow key={customer.CustomerID}>
            <TableData>
              <Initials fullName={customer.ContactName} />
            </TableData>

            <TableData>
              <DataLink linkTo={customer.CustomerID}>
                {customer.CompanyName}
              </DataLink>
            </TableData>

            <TableData>{customer.ContactName}</TableData>
            <TableData>{customer.ContactTitle}</TableData>
            <TableData>{customer.City}</TableData>
            <TableData>{customer.Country}</TableData>
          </TableBodyRow>
        ))}
      </tbody>
    </TableStyled>
  );
};

export default CustomersTable;
