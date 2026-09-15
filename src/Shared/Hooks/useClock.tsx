import { useState, useEffect } from "react";
import SingletonClockFactory from "../Classes/SingletonClockFactory";
import { type IClock } from "../types";

// takes a listener function as an argument
// returns the clock object
export function useClock(listener1: () => void): IClock {
  const clock = SingletonClockFactory.getInstance(1000);
  useEffect(() => {
    clock.addListener(listener1);
    return () => {
      clock.removeListener(listener1);
    };
  }, [clock, listener1]);
  return clock;
}
