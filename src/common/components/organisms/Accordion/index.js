import React from "react";

const accordionItems = [
  {
    label: "Button 1",
    value: "Text of Accordion 1",
  },
  {
    label: "Button 2",
    value: "Text of Accordion 2",
  },
  {
    label: "Button 3",
    value: "Text of Accordion 3",
  },
  {
    label: "Button 4",
    value: "Text of Accordion 4",
  },
];

export const Accordion = () => {
  return (
    <div className="accordion">
      {accordionItems.map((item) => (
        <AccordionItem key={item.label} hiddenText={item} />
      ))}
    </div>
  );
};

const AccordionItem = ({ hiddenText }) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleToggleVisibility = () => {
    setIsActive(!isActive);
  };
  const activeStatus = isActive ? "active" : "";

  return (
    <div className="accordion__item">
      {/* <div className="line__separator line__separator--accordion"></div> */}
      <button
        className="accordion__button"
        onClick={() => handleToggleVisibility()}
      >
        {hiddenText.label}
        <span className={isActive ? "fas fa-minus" : "fas fa-plus"}>
          {isActive ? "-" : "+"}
        </span>
      </button>
      <p className={`accordion__content ${activeStatus}`}>{hiddenText.value}</p>
    </div>
  );
};
