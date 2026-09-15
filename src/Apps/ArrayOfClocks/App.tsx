import * as React from "react";
import { useState, useEffect } from "react";
import { Heading, Table, Th, Tbody, Tr, Td, VStack } from "@chakra-ui/react";
import SingletonClockFactory from "../../Classes/SingletonClockFactory";
import { type IClock } from "../../types";

//
type ClockDisplayData = { key: number; name: string; clock: IClock };

import ClockDisplay from "../../Components/ClockDisplay";

// static data for a display
function makeClockDisplayData(key: number, clock: IClock): ClockDisplayData {
  return { key: key, name: "clock " + key, clock: clock };
}

// assemble a ClockDisplay component from the static and dynamic data
function makeClockDisplay(
  data: ClockDisplayData,
  handleAdd: () => void,
  handleDelete: (key: number) => void,
): JSX.Element {
  return (
    <ClockDisplay
      name={data.name}
      key={data.key}
      handleDelete={() => handleDelete(data.key)}
      clock={data.clock}
      handleAdd={handleAdd}
    />
  );
}

function makeTableRow(element: JSX.Element, key: number): JSX.Element {
  return (
    <Tr key={key}>
      <Td>{element}</Td>
    </Tr>
  );
}

export default function App() {
  const [clock, _] = useState<IClock>(SingletonClockFactory.getInstance(1000));

  // static data for the clocks displays
  const [clockDisplayData, setClockDisplayData] = useState<ClockDisplayData[]>([]);

  // dynamic data for the next key
  const [nextKey, setNextKey] = useState(1);

  function handleAdd() {
    const newDisplay = makeClockDisplayData(nextKey, clock);
    setClockDisplayData(clockDisplayData.concat(newDisplay));
    setNextKey(nextKey + 1);
  }

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
    useEffect(() => {handleAdd()}, [])

  return (
    <VStack>
      <Heading>Array of Clock Displays (2024-09-26)</Heading>
      <Table>
        <Tbody>
          {clockDisplayData.map((clockDisplayData) =>
            makeTableRow(
              makeClockDisplay(clockDisplayData, handleAdd, handleDelete),
              clockDisplayData.key,
            ),
          )}
        </Tbody>
      </Table>
    </VStack>
  );
}
