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
          <Stat>Query count: </Stat>
          <Stat>Results count: </Stat>
          <Stat># SELECT: </Stat>
          <Stat># SELECT WHERE: </Stat>
          <Stat># SELECT LEFT JOIN: </Stat>
        </BlockStat>
      </WrapperStat>

      <NameBlock>Activity log</NameBlock>
      <SmallText>Explore the app and see metrics here</SmallText>
      <AccentLog>
        2022-12-03T09:14:50.155Z,
        primary-cf5c58b0-e2c3-46e2-b128-37eecde77a08.db3, 0.14231199771165848ms
      </AccentLog>
      <Log>SELECT COUNT(1) as total FROM Supplier</Log>
    </>
  );
};

export default Statistic;
