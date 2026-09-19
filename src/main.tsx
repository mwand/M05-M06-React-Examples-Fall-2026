import * as React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";



// pick one example to mount as the App. Files live under src/Examples/...,
// grouped by concept; a "WithCustomHooks" (or similarly-suffixed) sibling
// is a later stage of the same example. Shared building blocks used by
// more than one example live under src/Shared/.

// import App from "./Examples/HelloWorld"
// import App from "./Examples/HelloWorldWithName"
// import App from "./Examples/HelloWorldAveryAndDave"

// import App from "./Examples/SimplestState"
// import App from "./Examples/SimplestStatePlus3"

// import App from "./Examples/SimpleClockDisplay"
// import App from "./Examples/SimpleClockDisplayWithUseClock"

// import App from "./Examples/TwoCountingButtons"
// import App from "./Examples/TwoCountingButtonsInAList/App"

// import App from "./Examples/ThreeClocks/App"

// import App from "./Examples/ArrayOfClocks/App"
// import App from "./Examples/ArrayOfClocksWithCustomHooks/App"

// import App  from "./Examples/SimpleClock/App"
// import App from "./Examples/ThreeClocks/App"

// import App from "./Examples/ToDoApp/App"
// import App from "./Examples/ToDoAppWithCustomHooks/App"

import App from "./Examples/useEffect-demo"
// import App from "./Examples/useEffect-demoWithCleanUps"

function Root() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
