import { EmployeeType } from "../../types/employeesTypes";
import {
  CardContent,
  CardContentItem,
  CardContentName,
  CardsItem,
} from "../shared/CardsList";
import DataLink from "../shared/DataLink";
import Initials from "../shared/initials/Initials";

interface IProps {
  data: EmployeeType[];
}

const EmployeesCardsList: React.FC<IProps> = ({ data }) => {
  return (
    <ul>
      {data.map((employee) => (
        <CardsItem key={employee.EmployeeID}>
          <ul>
            <CardContentItem
              style={{ flexDirection: "column", padding: "12px 0" }}
            >
              <Initials
                fullName={`${employee.FirstName} ${employee.LastName}`}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "calc(100% - 32px)",
                }}
              >
                <CardContentName>Name</CardContentName>

                <DataLink linkTo={employee.EmployeeID}>
                  {employee.FirstName} {employee.LastName}
                </DataLink>
              </div>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Title</CardContentName>
              <CardContent>{employee.Title}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>City</CardContentName>
              <CardContent>{employee.City}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Phone</CardContentName>
              <CardContent>{employee.HomePhone}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Country</CardContentName>
              <CardContent>{employee.Country}</CardContent>
            </CardContentItem>
          </ul>
        </CardsItem>
      ))}
    </ul>
  );
};

export default EmployeesCardsList;
