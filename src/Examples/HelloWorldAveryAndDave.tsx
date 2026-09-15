import HelloWorldWithName from "./HelloWorldWithName";
import { VStack } from "@chakra-ui/react";

export default function HelloWorldWithAveryAndDave() {
  return (
    <VStack>
      <HelloWorldWithName name="Avery" />
      <HelloWorldWithName name="Dave" />
    </VStack>
  );
}
