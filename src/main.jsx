import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"; // global styles (you can change/remove later)
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
