import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 1) prima cosa da fare è integrare Redux all'interno di React

import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // circondiamo App da Provider e gli diamo la prop store creata
  <Provider store={store}>
    <App />
  </Provider>
);
