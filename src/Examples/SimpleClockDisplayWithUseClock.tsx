import * as React from "react";
import { useState, useEffect } from "react";
import { type ITicker } from "../Shared/types";
import { useClock } from "../Shared/Hooks/useClock";
import { Box, Button, Heading, HStack, VStack, IconButton } from "@chakra-ui/react";
import {
  AiFillDelete,
  AiFillHeart,
  AiOutlineDelete,
  AiOutlineHeart,
  AiFillPlusCircle,
  AiOutlinePlus,
} from "react-icons/ai";

export function ClockDisplay(props: {
  name: string;
  key: number;
  handleDelete: () => void;
  handleAdd: () => void;
  noisyDelete?: boolean;
}) {
  const [localTime, setLocalTime] = useState(0);
  const incrementLocalTime = () => setLocalTime((localTime) => localTime + 1);
  const clock: ITicker = useClock(incrementLocalTime);

  return (
    <HStack>
      <Box>Clock: {props.name}</Box>
      <Box>Time = {localTime}</Box>
      <Box>nlisteners = {clock.nListeners}</Box>
      <IconButton aria-label={"delete"} onClick={props.handleDelete} icon={<AiOutlineDelete />} />
      <IconButton aria-label={"add"} onClick={props.handleAdd} icon={<AiOutlinePlus />} />
    </HStack>
  );
}
