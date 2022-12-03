export const isLoadingEmployeesStore = (state: any) =>
  state.employees.isLoading;

export const getAllEmployeesStore = (state: any) => state.employees.data;

export const getCountEmployeesStore = (state: any) => state.employees.total;
