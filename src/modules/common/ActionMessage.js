import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const ActionMessage = ({
  isActiveFeedback,
  title,
  message,
  onCloseInactive,
  OnActiveFeedback
}) => {
  return (
    <div
      className={`message__feedback ${isActiveFeedback &&
        "message__feedback--active"}`}
    >
      <div className="message__feedback--heading">
        <strong className="subtitle">{title}</strong>
        <AiOutlineClose
          className="icon icon__close--feedback"
          onClick={OnActiveFeedback}
        />
      </div>

      <span className="description">{message}</span>
    </div>
  );
};
