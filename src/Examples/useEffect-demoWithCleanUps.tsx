import * as React from "react";
import { useState, useEffect } from "react";
import { Heading, Button, VStack, Text } from "@chakra-ui/react";

function cleanup(message: string) {
  return () => {
    console.log("cleanup: " + message);
  };
}

// import { useFirstRender } from '../Hooks/useFirstRender'

export default function App() {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);

  // runs only on first render.
  useEffect(() => {
    console.log("useEffect #1 is run only on first render");
    return cleanup("useEffect #1");
  }, []);

  useEffect(() => {
    console.log("useEffect #2I is run only when i changes");
    return cleanup("useEffect #2I");
  }, [i]);

  useEffect(() => {
    console.log("useEffect #2J is run when j changes");
    return cleanup("useEffect #2J");
  }, [j]);

  // runs on every render
  useEffect(() => {
    console.log("useEffect #3A is called on every render");
    return cleanup("useEffect #3A");
  });

  // runs on every render
  useEffect(() => {
    console.log("useEffect #3B is called on every render");
    return cleanup("useEffect #3B");
  });

  // // runs on every render
  // useEffect(() => {
  //     console.log('useEffect #3C is called on every render')
  // })

  // observe that effects run in order of definition

  function onClickI() {
    console.log("Clicked i!");
    setI(i + 1);
  }

  function onClickJ() {
    console.log("Clicked j!");
    setJ(j + 1);
  }
  return (
    <VStack>
      <Heading>useEffect demo with CleanUps</Heading>
      <Text> i is {i} </Text>
      <Button onClick={onClickI}>Increment i</Button>
      <Text> j is {j} </Text>
      <Button onClick={onClickJ}>Increment j</Button>
    </VStack>
  );

  // note: writing setI(i+1) is a bug,
  // because i is not guaranteed to be the current value.
}
