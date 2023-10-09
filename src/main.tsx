import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { configureAxios } from "./services/index.ts";
import { QueryClientProvider, QueryClient } from "react-query";
import { createCssVars } from "./utils/createCssVars.ts";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import dayjs from "dayjs";
import "../public/locale/ru";

configureAxios();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
});

createCssVars();
dayjs.locale("ru");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MantineProvider defaultColorScheme="dark">
          <App />
        </MantineProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
