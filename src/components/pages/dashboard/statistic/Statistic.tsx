import { useAppSelector } from "../../../../hooks/reduxHooks";
import {
  AccentLog,
  BlockStat,
  Log,
  NameBlock,
  SmallText,
  Stat,
  WrapperStat,
} from "./Statistic.style";

const Statistic: React.FC = () => {
  const data = useAppSelector((store) => store.stats);
  const { dbQuery, queryCount, queryTypes, resultCount } = data;

  return (
    <>
      <WrapperStat>
        <BlockStat>
          <NameBlock>Worker</NameBlock>
          <Stat>Colo: FRA</Stat>
          <Stat>Country: UA</Stat>
        </BlockStat>

        <BlockStat>
          <NameBlock>SQL Metrics</NameBlock>
          <Stat>Query count: {queryCount}</Stat>
          <Stat>Results count: {resultCount}</Stat>
          <Stat># SELECT: {queryTypes.select}</Stat>
          <Stat># SELECT WHERE: {queryTypes.selectWhere}</Stat>
          <Stat># SELECT LEFT JOIN: {queryTypes.selectWithJoin}</Stat>
        </BlockStat>
      </WrapperStat>

      <NameBlock>Activity log</NameBlock>
      <SmallText>Explore the app and see metrics here</SmallText>

      {dbQuery.map((query, idx) => (
        <div key={idx}>
          <AccentLog>
            {query.date}, {query.duration}
          </AccentLog>
          <Log>{query.sql}</Log>
        </div>
      ))}
    </>
  );
};

export default Statistic;
