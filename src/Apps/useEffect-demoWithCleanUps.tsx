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
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);

  // runs only on first render.
  useEffect(() => {
    console.log("useEffect #1 is run only on first render");
    return cleanup("useEffect #1");
  }, []);

  useEffect(() => {
    console.log("useEffect #2N is run only when n changes");
    return cleanup("useEffect #2N");
  }, [n]);

  useEffect(() => {
    console.log("useEffect #2M is run when m changes");
    return cleanup("useEffect #2M");
  }, [m]);

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

  function onClickN() {
    console.log("Clicked n!");
    setN(n + 1);
  }

  function onClickM() {
    console.log("Clicked m!");
    setM(m + 1);
  }
  return (
    <VStack>
      <Heading>useEffect demo with CleanUps</Heading>
      <Text> n is {n} </Text>
      <Button onClick={onClickN}>Increment n</Button>
      <Text> m is {m} </Text>
      <Button onClick={onClickM}>Increment m</Button>
    </VStack>
  );

  // note: writing setN(n+1) is a bug,
  // because n is not guaranteed to be the current value.
}
