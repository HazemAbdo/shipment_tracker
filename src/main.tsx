import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { LocaleProvider } from "./context/LocaleContext";
import "./index.css";
import "./i18n/config.ts";
import { ShipmentProvider } from "./context/ShipmentContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocaleProvider>
      <ShipmentProvider>
        <App />
      </ShipmentProvider>
    </LocaleProvider>
  </React.StrictMode>
);
