import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./assets/css/style.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Toaster position="top-right" reverseOrder={false} />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
