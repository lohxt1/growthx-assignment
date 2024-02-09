import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preview from "./preview.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/preview" Component={Preview} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
