import { useState } from "react";

export const useMenuToggle = () => {
  const [isMenuToggle, setMenuToggle] = useState(false);

  const onMenuToggle = () => {
    setMenuToggle(!isMenuToggle);
  };

  return { isMenuToggle, onMenuToggle };
};
