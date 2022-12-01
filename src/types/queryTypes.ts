export type QueryAllDataByCategoryType = {
  category: string;
  page: number;
};

export type QueryDataInfoByIdType = {
  category: string;
  id: string;
};

export type QueryBySearchType = {
  category: string;
  query: string;
};
