import { SupplierType } from "../../types/suppliersTypes";
import DataLink from "../shared/DataLink";
import DataTitle from "../shared/DataTitle";
import Initials from "../shared/initials/Initials";
import {
  SuppliersTableStyled,
  SuppliersTableHead,
  SuppliersTableHeader,
  SuppliersTableBodyRow,
  SuppliersTableData,
} from "./SuppliersTable.style";

interface IProps {
  data: SupplierType[];
}

const SuppliersTable: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <DataTitle>Suppliers</DataTitle>

      <SuppliersTableStyled>
        <SuppliersTableHead>
          <tr>
            <SuppliersTableHeader></SuppliersTableHeader>
            <SuppliersTableHeader>Company</SuppliersTableHeader>
            <SuppliersTableHeader>Contact</SuppliersTableHeader>
            <SuppliersTableHeader>Title</SuppliersTableHeader>
            <SuppliersTableHeader>City</SuppliersTableHeader>
            <SuppliersTableHeader>Country</SuppliersTableHeader>
          </tr>
        </SuppliersTableHead>
        <tbody>
          {data.map((supplier) => (
            <SuppliersTableBodyRow key={supplier.SupplierID}>
              <SuppliersTableData>
                <Initials fullName={supplier.ContactName} />
              </SuppliersTableData>

              <SuppliersTableData>
                <DataLink linkTo={supplier.SupplierID}>
                  {supplier.CompanyName}
                </DataLink>
              </SuppliersTableData>

              <SuppliersTableData>{supplier.ContactName}</SuppliersTableData>
              <SuppliersTableData>{supplier.ContactTitle}</SuppliersTableData>
              <SuppliersTableData>{supplier.City}</SuppliersTableData>
              <SuppliersTableData>{supplier.Country}</SuppliersTableData>
            </SuppliersTableBodyRow>
          ))}
        </tbody>
      </SuppliersTableStyled>
    </>
  );
};

export default SuppliersTable;
