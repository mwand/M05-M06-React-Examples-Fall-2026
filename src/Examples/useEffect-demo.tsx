import * as React from "react";
import { useState, useEffect } from "react";
import { Heading, Button, VStack, Text } from "@chakra-ui/react";

export default function App() {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);

  // runs only on first render.
  useEffect(() => {
    console.log("useEffect #1 is run only on first render");
  }, []);

  // illustration of useFirstRender
  // useFirstRender(() => {
  //     console.log('useFirstRender #1 is run only on first render')
  // })

  useEffect(() => {
    console.log("useEffect #2I is run when i changes");
  }, [i]);

  useEffect(() => {
    console.log("useEffect #2J is run when j changes");
  }, [j]);

  useEffect(() => {
    console.log("useEffect #2IJ is run when either i or j changes");
  }, [i, j]);

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

  function onClickI() {
    console.log("Clicked i!");
    setI((i) => i + 1);
  }

  function onClickJ() {
    console.log("Clicked j!");
    setJ((j) => j + 1);
  }

  return (
    <VStack>
      <Heading>useEffect demo #1</Heading>
      <Text> i is {i} </Text>
      <Button onClick={onClickI}>Increment i</Button>
      <Text> j is {j} </Text>
      <Button onClick={onClickJ}>Increment j</Button>
    </VStack>
  );

  // note: writing setI(i+1) is a bug,
  // because i is not guaranteed to be the current value.
}
