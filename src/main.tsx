import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import theme from "./theme/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraBaseProvider>
  </React.StrictMode>
);
