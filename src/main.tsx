import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { configureAxios } from "./services/index.ts";

configureAxios();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
