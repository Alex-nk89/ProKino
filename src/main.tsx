import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { configureAxios } from "./services/index.ts";
import { QueryClientProvider, QueryClient } from "react-query";

configureAxios();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
