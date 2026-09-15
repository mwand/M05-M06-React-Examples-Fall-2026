import * as React from "react";
import { useState, useEffect } from "react";

export default function useEntryForm(onAdd: (title: string, priority: string) => void) {
  // state variables for this form
  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState("");
  const [key, setKey] = useState(1); // key is assigned when the item is created.

  function handleSubmit(event) {
    event.preventDefault(); // magic, sorry.
    if (title === "") {
      return;
    } // ignore blank button presses
    onAdd(title, priority); // tell the parent about the new item
    setTitle(""); // resetting the values redisplays the placeholder
    setPriority(""); // resetting the values redisplays the placeholder
    setKey(key + 1); // increment the key for the next item
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
    console.log("setting Title to:", event.target.value);
  }

  function handlePriorityChange(event) {
    setPriority(event.target.value);
    console.log("setting Priority to:", event.target.value);
  }

  // return the current value of these fields
  function getTitle() {
    return title;
  }

  function getPriority() {
    return priority;
  }

  return {
    handleTitleChange: handleTitleChange,
    handlePriorityChange: handlePriorityChange,
    handleSubmit: handleSubmit,
    getTitle: getTitle,
    getPriority: getPriority,
  };
}
