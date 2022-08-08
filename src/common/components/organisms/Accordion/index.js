import React from "react";

const AccordionItem = ({ title, description, data }) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleToggleVisibility = () => {
    setIsActive(!isActive);
  };
  const activeStatus = "active";
  // const activeStatus = isActive ? "active" : "";

  return (
    <div className="accordion__item">
      <button
        className="accordion__button"
        onClick={() => handleToggleVisibility()}
      >
        {title}
        {/* <span className={isActive ? "fas fa-minus" : "fas fa-plus"}>
          {isActive ? "-" : "+"}
        </span> */}
      </button>
      <div className={`accordion__content ${activeStatus}`}>
        <p>{description}</p>
        <div>
          {data.map((item) => {
            const { id, label, value } = item;
            return (
              <label key={id} htmlFor={value} className="subscribe__politic">
                <input type="checkbox" name={value} id={value} value={value} />
                <p>{label}</p>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Accordion = ({ dataAccordion }) => {
  return (
    <div className="accordion">
      {dataAccordion.map((item) => (
        <AccordionItem
          key={item.label}
          title={item.label}
          description={item.value}
          data={item.data}
        />
      ))}
    </div>
  );
};
