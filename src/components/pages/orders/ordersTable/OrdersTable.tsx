import { OrderCommonType } from "../../../../types/ordersTypes";
import DataLink from "../../../shared/dataLink/DataLink";
import {
  TableBodyRow,
  TableData,
  TableHead,
  TableHeader,
  TableStyled,
} from "../../../shared/dataTable/DataTable.style";

interface IProps {
  data: OrderCommonType[];
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

            <TableData>{order.TotalPrice}</TableData>
            <TableData>{order.Products}</TableData>
            <TableData>{order.Quantity}</TableData>
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
