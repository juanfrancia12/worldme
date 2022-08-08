import { useContext } from "react";
import { CartContext } from "common/contexts/cart/CartContext";

export const useCart = () => {
  const ctx = useContext(CartContext);

  return {
    ...ctx,
  };
};
