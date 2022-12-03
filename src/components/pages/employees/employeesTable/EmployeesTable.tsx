import {
  TableBodyRow,
  TableData,
  TableHead,
  TableHeader,
  TableStyled,
} from "../../../shared/dataTable/DataTable.style";
import { EmployeeType } from "../../../../types/employeesTypes";
import Initials from "../../../shared/initials/Initials";
import DataLink from "../../../shared/dataLink/DataLink";

interface IProps {
  data: EmployeeType[];
}

const EmployeesTable: React.FC<IProps> = ({ data }) => {
  return (
    <TableStyled>
      <TableHead>
        <tr>
          <TableHeader></TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>City</TableHeader>
          <TableHeader>Phone</TableHeader>
          <TableHeader>Country</TableHeader>
        </tr>
      </TableHead>

      <tbody>
        {data.map((employee) => (
          <TableBodyRow key={employee.EmployeeID}>
            <TableData>
              <Initials
                fullName={`${employee.FirstName} ${employee.LastName}`}
              />
            </TableData>

            <TableData>
              <DataLink linkTo={employee.EmployeeID}>
                {employee.FirstName} {employee.LastName}
              </DataLink>
            </TableData>

            <TableData>{employee.Title}</TableData>
            <TableData>{employee.City}</TableData>
            <TableData>{employee.HomePhone}</TableData>
            <TableData>{employee.Country}</TableData>
          </TableBodyRow>
        ))}
      </tbody>
    </TableStyled>
  );
};

export default EmployeesTable;
