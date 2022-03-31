import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import { ScrollTop } from "common/helpers/ScrollTop";

const ButtonScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={`icon icon__scroll--top ${visible && "icon__scroll--visible"}`}
      onClick={ScrollTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ButtonScrollTop;
