import * as React from "react";
import { Heading, Table, Tbody, VStack } from "@chakra-ui/react";
import { makeClockDisplay, makeTableRow } from "./DisplayHelpers";

// import the custom hook
import useClockDisplayList from "./useClockDisplayList original";

export default function App() {
  const { handleAdd, handleDelete, clockDisplayData, clock } = useClockDisplayList();

  return (
    <VStack>
      <Heading>Array of Clock Displays (2024-09-26)</Heading>
      <Table>
        <Tbody>
          {clockDisplayData.map((clockDisplayData) =>
            makeTableRow(
              makeClockDisplay(clockDisplayData, clock, handleAdd, handleDelete),
              clockDisplayData.key,
            ),
          )}
        </Tbody>
      </Table>
    </VStack>
  );
}
