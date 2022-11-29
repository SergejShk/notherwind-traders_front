import { OrderCommonType } from "../../types/ordersTypes";
import {
  CardContent,
  CardContentItem,
  CardContentName,
  CardsItem,
} from "../shared/CardsList";
import DataLink from "../shared/DataLink";

interface IProps {
  data: OrderCommonType[];
}

const OrdersCardsList: React.FC<IProps> = ({ data }) => {
  return (
    <ul>
      {data.map((order) => (
        <CardsItem key={order.OrderID}>
          <ul>
            <CardContentItem>
              <CardContentName>Id</CardContentName>
              <CardContent>
                <DataLink linkTo={order.OrderID}>{order.OrderID}</DataLink>
              </CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Price</CardContentName>
              <CardContent>{order.TotalPrice}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Products</CardContentName>
              <CardContent>{order.Products}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Quantity</CardContentName>
              <CardContent>{order.Quantity}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Date</CardContentName>
              <CardContent>{order.OrderDate.split(" ")[0]}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Name</CardContentName>
              <CardContent>{order.ShipName}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>City</CardContentName>
              <CardContent>{order.ShipCity}</CardContent>
            </CardContentItem>

            <CardContentItem>
              <CardContentName>Country</CardContentName>
              <CardContent>{order.ShipCountry}</CardContent>
            </CardContentItem>
          </ul>
        </CardsItem>
      ))}
    </ul>
  );
};

export default OrdersCardsList;
