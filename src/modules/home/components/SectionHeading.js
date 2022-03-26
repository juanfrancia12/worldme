import React from "react";

const SectionHeading = ({title}) => {
  return (
    <div className="section__heading">
      <div className="title">{title}</div>
      <button className="button button__primary">Ver todo</button>
    </div>
  );
};

export default SectionHeading;
