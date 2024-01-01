import { useEffect, useState } from "react";

interface Props {
  time: number;
}
export const useTimer = ({ time }: Props): boolean => {
  const [isFinished, setIsFinished] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsFinished(true), time);

    return () => clearTimeout(timer);
  }, [time]);
  return isFinished;
};

