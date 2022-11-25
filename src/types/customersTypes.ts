export type CustomerType = {
  CustomerID: string;
  CompanyName: string;
  ContactName: string;
  ContactTitle: string;
  Address: string;
  City: string;
  Region: string;
  PostalCode: string;
  Country: string;
  Phone: string;
  Fax: string;
};

export type AllCustomersType = {
  total: number | null;
  data: CustomerType[];
};

export type CustomersStore = {
  total: number | null;
  data: CustomerType[];
  isLoading: boolean;
  error: string;
};
