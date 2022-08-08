import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "App";
import { ProductsContextProvider } from "common/contexts/products/ProductsContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <Router>
        <App />
      </Router>
    </ProductsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
