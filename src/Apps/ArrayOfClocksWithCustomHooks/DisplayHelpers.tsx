import * as React from "react";
import { useState, useEffect } from "react";
import { Heading, Table, Th, Tbody, Tr, Td, VStack } from "@chakra-ui/react";
// import { Clock } from '../../Classes/Clock'
import { type IClock } from "../../types";
import useClockDisplayList from "./useClockDisplayList original";

// hmm, can this be refactored more to get rid of the formatting
type ClockDisplayData = { key: number; name: string };

import ClockDisplay from "./ClockDisplay";

// static data for a display
function makeClockDisplayData(key: number): ClockDisplayData {
  return { key: key, name: "clock " + key };
}

// assemble a ClockDisplay component from the static and dynamic data
export function makeClockDisplay(
  data: ClockDisplayData,
  clock: IClock,
  handleAdd: () => void,
  handleDelete: (key: number) => void,
): JSX.Element {
  return (
    <ClockDisplay
      name={data.name}
      key={data.key}
      handleDelete={() => handleDelete(data.key)}
      clock={clock}
      handleAdd={handleAdd}
    />
  );
}

export function makeTableRow(element: JSX.Element, key: number): JSX.Element {
  return (
    <Tr key={key}>
      <Td>{element}</Td>
    </Tr>
  );
}
