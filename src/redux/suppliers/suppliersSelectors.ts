export const isLoadingSuppliersStore = (state: any) =>
  state.suppliers.isLoading;

export const getAllSuppliersStore = (state: any) => state.suppliers.data;

export const getCountSuppliersStore = (state: any) => state.suppliers.total;
