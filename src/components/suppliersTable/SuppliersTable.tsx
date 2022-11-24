import { SupplierType } from "../../types/suppliersTypes";
import DataLink from "../shared/DataLink";
import {
  TableBodyRow,
  TableData,
  TableHead,
  TableHeader,
  TableStyled,
} from "../shared/DataTable";
import DataTitle from "../shared/DataTitle";
import Initials from "../shared/initials/Initials";

interface IProps {
  data: SupplierType[];
}

const SuppliersTable: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <DataTitle>Suppliers</DataTitle>

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
          {data.map((supplier) => (
            <TableBodyRow key={supplier.SupplierID}>
              <TableData>
                <Initials fullName={supplier.ContactName} />
              </TableData>

              <TableData>
                <DataLink linkTo={supplier.SupplierID}>
                  {supplier.CompanyName}
                </DataLink>
              </TableData>

              <TableData>{supplier.ContactName}</TableData>
              <TableData>{supplier.ContactTitle}</TableData>
              <TableData>{supplier.City}</TableData>
              <TableData>{supplier.Country}</TableData>
            </TableBodyRow>
          ))}
        </tbody>
      </TableStyled>
    </>
  );
};

export default SuppliersTable;
