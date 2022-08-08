import React, { createContext, useState } from "react";
import { data } from "common/data/home";
export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products] = useState(data);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};