import { OrderType } from "../../types/ordersTypes";
import DataLink from "../shared/DataLink";
import {
  TableBodyRow,
  TableData,
  TableHead,
  TableHeader,
  TableStyled,
} from "../shared/DataTable";

interface IProps {
  data: OrderType[];
}

const OrdersTable: React.FC<IProps> = ({ data }) => {
  return (
    <TableStyled>
      <TableHead>
        <tr>
          <TableHeader>Id</TableHeader>
          <TableHeader>Total Price</TableHeader>
          <TableHeader>Products</TableHeader>
          <TableHeader>Quantity</TableHeader>
          <TableHeader>Shipped</TableHeader>
          <TableHeader>Ship Name</TableHeader>
          <TableHeader>City</TableHeader>
          <TableHeader>Country</TableHeader>
        </tr>
      </TableHead>

      <tbody>
        {data.map((order) => (
          <TableBodyRow key={order.OrderID}>
            <TableData>
              <DataLink linkTo={order.OrderID}>{order.OrderID}</DataLink>
            </TableData>

            <TableData></TableData>
            <TableData></TableData>
            <TableData></TableData>
            <TableData>{order.OrderDate.split(" ")[0]}</TableData>
            <TableData>{order.ShipName}</TableData>
            <TableData>{order.ShipCity}</TableData>
            <TableData>{order.ShipCountry}</TableData>
          </TableBodyRow>
        ))}
      </tbody>
    </TableStyled>
  );
};

export default OrdersTable;
