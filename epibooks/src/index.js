import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./bookState/bookStore";
import commentStore from "./commentState/commentStore";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >
    <Provider store={commentStore} >
      <App />
    </Provider>
  </Provider>
);
