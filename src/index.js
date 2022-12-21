import React from "react";
import ReactDOM from "react-dom/client";
//import { Restaurent11, Restaurent7 } from "./components/Restaurent/Restaurent";
//import App from "./App";
//import Overview from "./components/Restaurent/Overview";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Overview from "./components/Restaurent/Overview";
import RestOverview from "./components/Restaurent/RestOverview";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
