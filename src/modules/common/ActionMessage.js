import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const ActionMessage = ({
  isActive,
  title,
  description,
  onVisibleInactive,
}) => {
  return (
    <div
      className={`message__feedback ${isActive && "message__feedback--active"}`}
    >
      <div className="message__feedback--heading">
        <strong className="subtitle">{title}</strong>
        <AiOutlineClose
          className="icon icon__close--feedback"
          onClick={onVisibleInactive}
        />
      </div>

      <span className="description">{description}</span>
    </div>
  );
};

// export const ActionMessage = ({
//   isActiveFeedback,
//   title,
//   message,
//   onVisibleInactive,
//   onCloseInactive,
//   OnActiveFeedback
// }) => {
//   return (
//     <div
//       className={`message__feedback ${isActiveFeedback &&
//         "message__feedback--active"}`}
//     >
//       <div className="message__feedback--heading">
//         <strong className="subtitle">{title}</strong>
//         <AiOutlineClose
//           className="icon icon__close--feedback"
//           onClick={onVisibleInactive}
//         />
//       </div>

//       <span className="description">{message}</span>
//     </div>
//   );
// };
