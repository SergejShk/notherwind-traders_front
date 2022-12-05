import { SupplierType } from "../../../../types/suppliersTypes";
import DataLink from "../../../shared/dataLink/DataLink";
import {
  TableBodyRow,
  TableData,
  TableHead,
  TableHeader,
  TableStyled,
} from "../../../shared/dataTable/DataTable.style";
import Initials from "../../../shared/initials/Initials";
import { suppliersTableHeaders } from "./suppliersTableHelpers";

interface IProps {
  data: SupplierType[];
}

const SuppliersTable: React.FC<IProps> = ({ data }) => {
  return (
    <TableStyled>
      <TableHead>
        <tr>
          {suppliersTableHeaders.map((header, idx) => (
            <TableHeader key={idx}>{header}</TableHeader>
          ))}
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
  );
};

export default SuppliersTable;
