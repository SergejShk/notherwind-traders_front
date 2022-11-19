export type QuerySuppliers = {
  page: number;
};

export type SupplierType = {
  Address: string;
  City: string;
  CompanyName: string;
  ContactName: string;
  ContactTitle: string;
  Country: string;
  Fax: string;
  HomePage: string;
  Phone: string;
  PostalCode: string;
  Region: string;
  SupplierID: string;
};

export type AllSuppliersType = {
  total: number | null;
  data: SupplierType[];
};

export type SuppliersStore = {
  total: number | null;
  data: SupplierType[];
  isLoading: boolean;
  error: string;
};
