import { useContext } from "react";
import { ProductsContext } from "common/contexts/products/ProductsContext";

export const useProducts = () => {
  const ctx = useContext(ProductsContext);

  return {
    ...ctx,
  };
};
