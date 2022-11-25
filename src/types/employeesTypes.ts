export type EmployeeType = {
  EmployeeID: string;
  LastName: string;
  FirstName: string;
  Title: string;
  TitleOfCourtesy: string;
  BirthDate: string;
  HireDate: string;
  Address: string;
  City: string;
  Region: string;
  PostalCode: string;
  Country: string;
  HomePhone: string;
  Extension: string;
  Notes: string;
  ReportsTo: string;
};

export type AllEmployeesType = {
  total: number | null;
  data: EmployeeType[];
};

export type EmployeesStore = {
  total: number | null;
  data: EmployeeType[];
  isLoading: boolean;
  error: string;
};
