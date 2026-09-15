import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Button, HStack, Icon, IconButton, usePrevious } from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { type IClock } from "../types";

export default function ClockDisplay(props: {
  name: string;
  key: number;
  clock: IClock;
  handleDelete: () => void;
  handleAdd: () => void;
}): JSX.Element {
  const [localTime, setLocalTime] = useState(0);
  const incrementLocalTime = () => {
    setLocalTime((localTime) => localTime + 1);
  };

  const clock = props.clock;

  useEffect(() => {
    const listener1 = () => {
      incrementLocalTime();
    };
    props.clock.addListener(listener1);
    console.log(`ClockDisplay ${props.name} is mounting`);
    return () => {
      console.log("ClockDisplay " + props.name + " is unmounting");
      props.clock.removeListener(listener1);
    };
  }, [props.clock, props.name]);

  // if you put {clock.stop} in the call to Button,
  // it doesn't work. Somehow or other, it gets the wrong value of 'this'.
  function handleStop() {
    clock.stop();
  }

  function handleStart() {
    clock.start();
  }

  return (
    <HStack>
      <Box>Clock: {props.name}</Box>
      <Box>Clock ID: {clock.id} </Box>
      <Box>Time = {localTime}</Box>
      <Box>nlisteners = {clock.nListeners}</Box>
      <Button aria-label={"start"} onClick={handleStart}>
        Start
      </Button>
      <Button aria-label={"stop"} onClick={handleStop}>
        Stop
      </Button>
      <IconButton aria-label={"delete"} onClick={props.handleDelete} icon={<AiOutlineDelete />} />
      <IconButton aria-label={"add"} onClick={props.handleAdd} icon={<AiOutlinePlus />} />
    </HStack>
  );
}

//
