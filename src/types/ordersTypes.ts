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

export type OrderCommonType = {
  OrderID: string;
  TotalPrice: string;
  Products: string;
  Quantity: string;
  OrderDate: string;
  ShipName: string;
  ShipCity: string;
  ShipCountry: string;
};

export type AllOrdersType = {
  total: number | null;
  data: OrderCommonType[];
};

export type OrdersStore = {
  total: number | null;
  data: OrderCommonType[];
  isLoading: boolean;
  error: string;
};

export type OrderProductsType = {
  Discount: string;
  OrderDetailsID: number;
  OrderID: string;
  ProductID: string;
  Quantity: string;
  UnitPrice: string;
  ProductName: string;
};
