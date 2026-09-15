import { useState, useEffect } from "react";
import { Box, Button, Heading, HStack, VStack, IconButton } from "@chakra-ui/react";
import {
  AiFillDelete,
  AiFillHeart,
  AiOutlineDelete,
  AiOutlineHeart,
  AiFillPlusCircle,
  AiOutlinePlus,
} from "react-icons/ai";
import SingletonClockFactory from "../Shared/Classes/Ticker";
import type { ITicker } from "../Shared/types";

// this version simply imports a clock from its container
export function ClockDisplay(props: {
  name: string;
  key: number;
  clock: ITicker;
  handleDelete: () => void;
  handleAdd: () => void;
  noisyDelete?: boolean;
}) {
  const clock = props.clock;
  const [localTime, setLocalTime] = useState(0);
  const incrementLocalTime = () => setLocalTime((localTime) => localTime + 1);

  useEffect(() => {
    const listener1 = () => {
      incrementLocalTime();
    };
    clock.addListener(listener1);
    return () => {
      console.log("ClockDisplay", props.name, "unmounting");
      clock.removeListener(listener1);
    };
  }, []);

  return (
    <VStack>
      <Box>Clock: {props.name}</Box>
      <Box>Time = {localTime}</Box>
      <Box>nlisteners = {clock.nListeners}</Box>
      <IconButton aria-label={"delete"} onClick={props.handleDelete} icon={<AiOutlineDelete />} />
      <IconButton aria-label={"add"} onClick={props.handleAdd} icon={<AiOutlinePlus />} />
    </VStack>
  );
}
