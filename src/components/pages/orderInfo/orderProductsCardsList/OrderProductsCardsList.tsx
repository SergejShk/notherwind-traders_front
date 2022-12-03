import { OrderProductsType } from "../../../../types/ordersTypes";
import {
  CardContent,
  CardContentItem,
  CardContentName,
  CardsItem,
} from "../../../shared/cardsList/CardsList";
import DataLink from "../../../shared/dataLink/DataLink";

interface IProps {
  data: OrderProductsType[];
}

const OrderProductsCardsList: React.FC<IProps> = ({ data }) => {
  const getTotalPrice = (num1: string, num2: string) => {
    const totalPrice = Number(num1) * Number(num2);

    return totalPrice.toFixed(2);
  };

  return (
    <ul>
      {data.map((product) => (
        <CardsItem key={product.ProductID}>
          <ul>
            <CardContentItem>
              <CardContentName>Product</CardContentName>
              <DataLink linkTo={`/products/${product.ProductID}`}>
                {product.ProductID}
              </DataLink>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Quantity</CardContentName>
              <CardContent>{product.Quantity}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Order Price</CardContentName>
              <CardContent>${Number(product.UnitPrice).toFixed(2)}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Total Price</CardContentName>
              <CardContent>
                ${getTotalPrice(product.UnitPrice, product.Quantity)}
              </CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Discount</CardContentName>
              <CardContent>{Number(product.Discount) * 100}%</CardContent>
            </CardContentItem>
          </ul>
        </CardsItem>
      ))}
    </ul>
  );
};

export default OrderProductsCardsList;
