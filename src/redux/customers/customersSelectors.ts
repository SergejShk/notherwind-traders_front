export const isLoadingCustomersStore = (state: any) =>
  state.customers.isLoading;

export const getAllCustomersStore = (state: any) => state.customers.data;

export const getCountCustomersStore = (state: any) => state.customers.total;
