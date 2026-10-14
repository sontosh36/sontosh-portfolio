"use client";

import { AnimatedCounterProps } from "@/types/counter";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ end, suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const duration = 1500;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      current += 1;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default AnimatedCounter;
