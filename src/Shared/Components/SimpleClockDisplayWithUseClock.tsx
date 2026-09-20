import { useState, useEffect } from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import type { ClockDisplayProps } from "../types";

// this version simply imports a clock from its container
export default function ClockDisplay(props: ClockDisplayProps) {
  const clock = props.clock;
  const [localTime, setLocalTime] = useState(0);

  useEffect(() => {
    const listener1 = () => {setLocalTime((localTime) => localTime + 1)};
    clock.addListener(listener1);
    return () => {
      clock.removeListener(listener1);
    };
  }, []);

  function handleStart() {
    clock.start();
  }

  function handleStop() {
    clock.stop();
  }

  function handleReset() {
    setLocalTime(0);
  }

  return (
    <VStack border="2px" borderColor="green" padding="1" width="fit-content" mx="auto">
      <HStack>
        <Box>Clock: {props.name}</Box>
        <Box>Time = {localTime}</Box>
        <Box>nlisteners = {clock.nListeners}</Box>
      </HStack>
      <HStack>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
        <Button onClick={handleReset}>Reset</Button>
      </HStack>
      {props.handleAdd && (
        <HStack>
          <Button onClick={props.handleDelete}>Delete {props.name}</Button>
          <Button onClick={props.handleAdd}>Add a clock</Button>
        </HStack>
      )}
    </VStack>
  );
}

Box.defaultProps = {
  border: "2px",
  borderColor: "green",
  padding: "1",
};

Button.defaultProps = {
  textColor: "red",
  border: "2px",
  borderColor: "black",
};
