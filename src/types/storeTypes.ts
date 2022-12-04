type TQueryType = any;

export type TDBQuery = {
  date: string;
  duration: string;
  sql: string;
};

export type TStatsStore = {
  queryCount: number;
  resultCount: number;
  queryTypes: TQueryType;
  dbQuery: TDBQuery[];
};

export type TMetrics = {
  resultCount: number;
  type: string[];
};

export type TPayload = {
  metrics: TMetrics;
  stats: TDBQuery;
};
