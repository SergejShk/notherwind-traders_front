import {
  CardContent,
  CardContentItem,
  CardContentName,
  CardsItem,
} from "../../../shared/cardsList/CardsList";
import DataLink from "../../../shared/dataLink/DataLink";
import { ProductType } from "../../../../types/productsTypes";

interface IProps {
  data: ProductType[];
}

const ProductsCardsList: React.FC<IProps> = ({ data }) => {
  return (
    <ul>
      {data.map((product) => (
        <CardsItem key={product.ProductID}>
          <ul>
            <CardContentItem>
              <CardContentName>Product</CardContentName>

              <DataLink linkTo={product.ProductID}>
                {product.ProductName}
              </DataLink>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Qpu</CardContentName>
              <CardContent>{product.QuantityPerUnit}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Price</CardContentName>
              <CardContent>${product.UnitPrice}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Stock</CardContentName>
              <CardContent>{product.UnitsInStock}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Orders</CardContentName>
              <CardContent>{product.UnitsOnOrder}</CardContent>
            </CardContentItem>
          </ul>
        </CardsItem>
      ))}
    </ul>
  );
};

export default ProductsCardsList;
