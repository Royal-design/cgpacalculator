import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { DataFormContextProvider } from "./context/FormContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <DataFormContextProvider>
      <App />
      </DataFormContextProvider>
    </ChakraProvider>
    
  </React.StrictMode>
);
