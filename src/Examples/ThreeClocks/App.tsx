import { useState } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import { type ITicker } from "../../Shared/types";
import Ticker from "../../Shared/Classes/Ticker";
import ClockDisplay from "../../Shared/Components/SimpleClockDisplay";

// three clock displays sharing a single ticker

export default function App() {
  const [clock, _] = useState<ITicker>(new Ticker(1000));

  return (
    <VStack>
      <Heading>Three Clocks</Heading>
      <ClockDisplay key={1} name="Clock A" clock={clock} />
      <ClockDisplay key={2} name="Clock B" clock={clock} />
      <ClockDisplay key={3} name="Clock C" clock={clock} />
    </VStack>
  );
}
