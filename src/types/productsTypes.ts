export type QueryProducts = {
  page: number;
};

export type ProductType = {
  ProductID: string;
  ProductName: string;
  SupplierID: string;
  CategoryID: string;
  QuantityPerUnit: string;
  UnitPrice: string;
  UnitsInStock: string;
  UnitsOnOrder: string;
  ReorderLevel: string;
  Discontinued: string;
};

export type AllProductsType = {
  total: number | null;
  data: ProductType[];
};

export type ProductsStore = {
  total: number | null;
  data: ProductType[];
  isLoading: boolean;
  error: string;
};
