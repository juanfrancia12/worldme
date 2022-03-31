import { useState } from "react";

export const useStateActive = () => {
  const [isActive, setIsActive] = useState(false);

  const onCloseInactive = () => {
    setIsActive(false);
  };

  const onCloseActive = () => {
    setIsActive(true);
  };

  const onMenuToggle = () => {
    setIsActive(!isActive);
  };

  return { isActive, onCloseInactive, onCloseActive, onMenuToggle };
};