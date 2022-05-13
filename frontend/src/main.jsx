import React from "react";
import ReactDOM from "react-dom";
import { IdProvider } from "./contexts/IdContext";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <IdProvider>
      <App />
    </IdProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
