// our attempt to keep a list of actual components in the container.
// doesn't work because the components are not updated when the global count changes.

// giving up on this approach, we will just keep all of the shared state in the parent. (sigh!)
// pass the global count as a prop
// the local state is preserved by React magic using "key".

import * as React from "react";
import { useState } from "react";
import { Box, VStack } from "@chakra-ui/react";

// create two CountingButtons, and keep track of the total count.
import { CountingButton } from "../../Shared/Components/CountingButton";

type CountingButtonData = { key: number; name: string };

export default function App() {
  const [globalCount, setGlobalCount] = useState(0);
  // sniff: keeping components themselves in a list doesn't work, so far as I can tell.
  // const [countingButtons, _] = useState([
  //   makeCountingButton(1, globalCount, "Button A"),
  //   makeCountingButton(2, globalCount, "Button B"),
  // ]);

  // static data for the buttons
  const countingButtonData = [
    { key: 1, name: "Button A" },
    { key: 2, name: "Button B" },
  ];

  // create the buttons using the dynamic data as well
  // in this case, that's just 'globalCount'
  function countingButtons(): JSX.Element[] {
    return countingButtonData.map((buttonData) => {
      return makeCountingButton(buttonData.key, globalCount, buttonData.name);
    });
  }

  function incrementGlobalCount() {
    console.log("incrementGlobalCount", globalCount);
    setGlobalCount((globalCount) => globalCount + 1);
  }

  function getGlobalCount() {
    console.log("getGlobalCount", globalCount);
    return globalCount;
  }

  function makeCountingButton(key: number, globalCount: number, name: string): JSX.Element {
    return (
      <CountingButton
        key={key}
        name={name}
        globalCount={globalCount}
        onClick={incrementGlobalCount}
      />
    );
  }

  return (
    <VStack spacing="30px">
      <Box border="1px" padding="1">
        Total count = {globalCount}
      </Box>
      {countingButtons()}
    </VStack>
  );
}
