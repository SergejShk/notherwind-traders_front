import { ProductType } from "../../../../types/productsTypes";
import DataLink from "../../../shared/dataLink/DataLink";
import {
  TableBodyRow,
  TableData,
  TableHead,
  TableHeader,
  TableStyled,
} from "../../../shared/dataTable/DataTable.style";

interface IProps {
  data: ProductType[];
}

const ProductsTable: React.FC<IProps> = ({ data }) => {
  return (
    <TableStyled>
      <TableHead>
        <tr>
          <TableHeader>Name</TableHeader>
          <TableHeader>Qt per unit</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>Stock</TableHeader>
          <TableHeader>Orders</TableHeader>
        </tr>
      </TableHead>

      <tbody>
        {data.map((product) => (
          <TableBodyRow key={product.ProductID}>
            <TableData>
              <DataLink linkTo={product.ProductID}>
                {product.ProductName}
              </DataLink>
            </TableData>

            <TableData>{product.QuantityPerUnit}</TableData>
            <TableData>${product.UnitPrice}</TableData>
            <TableData>{product.UnitsInStock}</TableData>
            <TableData>{product.UnitsOnOrder}</TableData>
          </TableBodyRow>
        ))}
      </tbody>
    </TableStyled>
  );
};

export default ProductsTable;
