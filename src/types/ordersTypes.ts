export type OrderType = {
  OrderID: string;
  CustomerID: string;
  EmployeeID: string;
  OrderDate: string;
  RequiredDate: string;
  ShippedDate: string;
  ShipVia: string;
  Freight: string;
  ShipName: string;
  ShipAddress: string;
  ShipCity: string;
  ShipRegion: string;
  ShipPostalCode: string;
  ShipCountry: string;
};

export type AllOrdersType = {
  total: number | null;
  data: OrderType[];
};

export type OrdersStore = {
  total: number | null;
  data: OrderType[];
  isLoading: boolean;
  error: string;
};
