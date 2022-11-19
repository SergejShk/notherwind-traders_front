import { useState, useEffect, useRef } from "react";
import { ClockStyled } from "./Clock.style";

const Clock: React.FC = () => {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef<any | null>(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      StopClock();
    };
  }, []);

  const StopClock = () => {
    intervalId.current && clearInterval(intervalId.current);
  };

  return <ClockStyled>{time.toLocaleTimeString()}</ClockStyled>;
};

export default Clock;
