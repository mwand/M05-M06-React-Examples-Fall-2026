import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Button, HStack, Icon, IconButton, usePrevious } from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineReload, AiOutlineStop } from "react-icons/ai";
import { type ITicker } from "../types";

export default function ClockDisplay(props: {
  name: string;
  key: number;
  clock: ITicker;
  handleDelete?: () => void;
  handleAdd?: () => void;
  handleReset?: () => void;
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
    console.log(`ClockDisplay ${props.name} is mounting`)
    // the clock doesn't start by itself
    clock.start();
    return () => {
      console.log("ClockDisplay " + props.name + " is unmounting");
      props.clock.removeListener(listener1);
    };
  }, [props.clock, props.name]);

  function handleStop() {
    clock.stop();
  }

  function handleStart() {
    clock.start();
  }

  // reset local time to 0, but the clock keeps running
  // also tell the parent that we've hit reset
  // (it's up to the parent to decide whether to reset this clock's siblings)
  function handleReset() {
    setLocalTime(0);

    props.handleReset?.();
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
      <Button aria-label={"stop"} onClick={handleStop} leftIcon={<AiOutlineStop />}>
        Stop
      </Button>
      <Button aria-label={"reset"} onClick={handleReset} leftIcon={<AiOutlineReload />}>
        Reset
      </Button>
      {props.handleDelete && (
        <IconButton aria-label={"delete"} onClick={props.handleDelete} icon={<AiOutlineDelete />} />
      )}
      {props.handleAdd && (
        <IconButton aria-label={"add"} onClick={props.handleAdd} icon={<AiOutlinePlus />} />
      )}
    </HStack>
  );
}

//
