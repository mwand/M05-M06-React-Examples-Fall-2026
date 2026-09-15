import * as React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Text,
  VStack,
  Tr,
  Td,
  Table,
  Tbody,
  TableContainer,
  HStack,
} from "@chakra-ui/react";

import useEntryForm from "./useEntryForm";
import { get } from "http";

export function ToDoItemEntryForm(props: { onAdd: (title: string, priority: string) => void }) {
  const {
    handleTitleChange: handleTitleChange,
    handlePriorityChange: handlePriorityChange,
    handleSubmit: handleSubmit,
    getTitle: getTitle,
    getPriority: getPriority,
  } = useEntryForm(props.onAdd);

  return (
    <VStack spacing={0} align="left">
      <form>
        <FormControl>
          <VStack align="left" spacing={0}>
            <FormLabel as="b">Add TODO item here:</FormLabel>
            <HStack w="200" align="left">
              <Input
                name="title"
                value={getTitle()}
                placeholder="type item name here"
                onChange={handleTitleChange}
              />
              <Input
                name="priority"
                value={getPriority()}
                placeholder="type priority here"
                onChange={handlePriorityChange}
              />
              <Box>
                <Button bg="lightblue" type="submit" onClick={handleSubmit} width={200}>
                  {" "}
                  Add TODO item
                </Button>
              </Box>
            </HStack>
          </VStack>
        </FormControl>
      </form>
    </VStack>
  );
}

//<Box h='4'></Box>
