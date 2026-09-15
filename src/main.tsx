import * as React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

// import App from './Apps/ToDoApp/ToDoApp'
// import App from './Apps/SimpleClockDisplayApp'
// import App from './Apps/ArrayOfClocksApp'
// import App from './Apps/useEffect-demoWithCleanUps'
// import App from './Apps/SimpleClockDisplayApp'
// import App from './Apps/TwoCountingButtonsInAList/Root'

// below here are addresses under new organization src/Apps/...
// change ./Apps to ./Apps/<appname>/App
// import App from './Apps/ThreeClocks/App'
// import App from './Apps/useEffect-demo'
// import App from "./Apps/useEffect-demoWithCleanUps";

// import App from "./Components/SimplestState"
// import App from "./Components/HelloWorld";
import App from "./Components/HelloWorldAveryAndDave"

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
