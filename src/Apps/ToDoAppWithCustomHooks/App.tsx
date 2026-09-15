// illustrates forms, lists, etc.
// THE WHOLE POINT OF THIS IS THE ATTRIBUTE 'key' ON LINE

import * as React from "react";
import { useState, useEffect } from "react";
import { Heading, Table, Th, Tbody, Tr, Td, VStack } from "@chakra-ui/react";

import type { ToDoItem } from "./ToDoListTypes";
import { ToDoItemEntryForm } from "./ToDoItemEntryForm";
import { ToDoListDisplay } from "./ToDoListDisplay";
import useToDoItemList from "./useToDoItemList";

export default function ToDoApp() {
  const { todoList, handleAdd, handleDelete } = useToDoItemList();

  return (
    <VStack>
      <Heading>TODO List</Heading>
      <ToDoItemEntryForm onAdd={handleAdd} />
      <ToDoListDisplay items={todoList} onDelete={handleDelete} />
    </VStack>
  );
}
