import * as React from "react";
import { useState, useEffect } from "react";
import { Heading, Table, Th, Tbody, Tr, Td, VStack } from "@chakra-ui/react";
import SingletonClockFactory from "../../Classes/SingletonClockFactory";
import { type IClock } from "../../types";

//
type ClockDisplayData = { key: number; name: string };

import ClockDisplay from "./ClockDisplay";

// static data for a display
function makeClockDisplayData(key: number): ClockDisplayData {
  return { key: key, name: "clock " + key };
}

export default function useClockDisplayList() {
  const [clock, _] = useState<IClock>(SingletonClockFactory.getInstance(1000));

  // static data for the clocks displays
  const [clockDisplayData, setClockDisplayData] = useState<ClockDisplayData[]>([]);

  // dynamic data for the next key
  const [nextKey, setNextKey] = useState(1);

  function handleAdd() {
    const newDisplay = makeClockDisplayData(nextKey);
    setClockDisplayData(clockDisplayData.concat(newDisplay));
    setNextKey(nextKey + 1);
  }

  // add a clock display for the first render
  // this seems to work, but I'm not sure why...
  React.useMemo(() => {
    console.log("creating first clock display");
    const newDisplay = makeClockDisplayData(1);
    setClockDisplayData([newDisplay]);
    setNextKey(2);
  }, []);

  function handleDelete(targetKey: number) {
    const newList = clockDisplayData.filter((item) => item.key != targetKey);
    setClockDisplayData(newList);
  }

  function handleStart() {
    clock.start();
  }

  function handleStop() {
    clock.stop();
  }

  // add a clock display for the first render
  // not sure how else to fix this :(
  // eslint-disable-next-line
    // useEffect(() => {handleInitialAdd()}, [])

  return {
    handleAdd: handleAdd,
    handleDelete: handleDelete,
    clockDisplayData: clockDisplayData,
    clock: clock,
  };
}
