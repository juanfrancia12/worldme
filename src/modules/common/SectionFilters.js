import React from "react";
import { Accordion } from "common/components/organisms/Accordion";



const SectionFilters = ({accordionItems}) => {
  return (
    <div className="section__filters">
      <Accordion dataAccordion={accordionItems} />
    </div>
  );
};

export default SectionFilters;
