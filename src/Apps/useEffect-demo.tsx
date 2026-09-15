import * as React from "react";
import { useState, useEffect } from "react";
import { Heading, Button, VStack, Text } from "@chakra-ui/react";

export default function App() {
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);

  // runs only on first render.
  useEffect(() => {
    console.log("useEffect #1 is run only on first render");
  }, []);

  // illustration of useFirstRender
  // useFirstRender(() => {
  //     console.log('useFirstRender #1 is run only on first render')
  // })

  useEffect(() => {
    console.log("useEffect #2N is run when n changes");
  }, [n]);

  useEffect(() => {
    console.log("useEffect #2M is run when m changes");
  }, [m]);

  useEffect(() => {
    console.log("useEffect #2MN is called on every render");
  }, [m, n]);

  // runs on every render
  useEffect(() => {
    console.log("useEffect #3 is called on every render");
  });

  // // runs on every render
  // useEffect(() => {
  //     console.log('useEffect #3B is called on every render')
  // })

  // // runs on every render
  // useEffect(() => {
  //     console.log('useEffect #3C is called on every render')
  // })

  // observe that effects run in order of definition

  function onClickN() {
    console.log("Clicked n!");
    setN((n) => n + 1);
  }

  function onClickM() {
    console.log("Clicked m!");
    setM((m) => m + 1);
  }

  return (
    <VStack>
      <Heading>useEffect demo #1</Heading>
      <Text> n is {n} </Text>
      <Button onClick={onClickN}>Increment n</Button>
      <Text> m is {m} </Text>
      <Button onClick={onClickM}>Increment m</Button>
    </VStack>
  );

  // note: writing setN(n+1) is a bug,
  // because n is not guaranteed to be the current value.
}
