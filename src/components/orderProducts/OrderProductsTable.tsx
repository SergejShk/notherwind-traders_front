import { OrderProductsType } from "../../types/ordersTypes";
import DataLink from "../shared/DataLink";
import {
  TableBodyRow,
  TableData,
  TableHead,
  TableHeader,
  TableStyled,
} from "../shared/DataTable";

interface IProps {
  data: OrderProductsType[];
}

const OrderProductsTable: React.FC<IProps> = ({ data }) => {
  const getTotalPrice = (num1: string, num2: string) => {
    const totalPrice = Number(num1) * Number(num2);

    return totalPrice.toFixed(2);
  };

  return (
    <TableStyled>
      <TableHead>
        <tr>
          <TableHeader>Product</TableHeader>
          <TableHeader>Quantity</TableHeader>
          <TableHeader>Order Price</TableHeader>
          <TableHeader>Total Price</TableHeader>
          <TableHeader>Discount</TableHeader>
        </tr>
      </TableHead>

      <tbody>
        {data.map((product) => (
          <TableBodyRow key={product.ProductID}>
            <TableData>
              <DataLink linkTo={`/products/${product.ProductID}`}>
                {product.ProductName}
              </DataLink>
            </TableData>

            <TableData>{product.Quantity}</TableData>
            <TableData>${Number(product.UnitPrice).toFixed(2)}</TableData>
            <TableData>
              ${getTotalPrice(product.UnitPrice, product.Quantity)}
            </TableData>
            <TableData>{Number(product.Discount) * 100}%</TableData>
          </TableBodyRow>
        ))}
      </tbody>
    </TableStyled>
  );
};

export default OrderProductsTable;
