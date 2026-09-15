import * as React from "react";
import { useEffect, useState } from "react";
import { Heading, VStack } from "@chakra-ui/react";

import ClockDisplay from "../../Shared/Components/ClockDisplay";
import SingletonClock from "../../Shared/Classes/SingletonClockFactory";

function doNothing() {}

export default function App() {
  const [clock, _] = useState(SingletonClock.getInstance(1000));

  function handleAdd() {
    console.log("handleAdd called");
  }

  return (
    <VStack>
      <Heading>Three Clocks</Heading>
      <ClockDisplay
        key={1}
        name={"Clock A"}
        clock={clock}
        handleAdd={handleAdd}
        handleDelete={doNothing}
      />
      <ClockDisplay
        key={2}
        name={"Clock B"}
        clock={clock}
        handleAdd={doNothing}
        handleDelete={doNothing}
      />
      <ClockDisplay
        key={3}
        name={"Clock C"}
        clock={clock}
        handleAdd={doNothing}
        handleDelete={doNothing}
      />
    </VStack>
  );
}
