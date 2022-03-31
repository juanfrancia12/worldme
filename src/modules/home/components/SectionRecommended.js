import React from "react";

const SectionRecommended = ({ data, shortHeight }) => {
  return (
    <div className="grid__layout">
      {data.map((item) => {
        const { id, image, title, subtitle } = item;
        return (
          <ul key={id} className={`card__item card__item--recommended ${shortHeight && 'card__item--shortheight'}`}>
            <img src={image} alt={title} className="card__item--image" />
            <div className={`card__item--information ${shortHeight && 'card__item--shortinformation'}`}>
              <h3 className="subtitle">{subtitle}</h3>
              <h2 className="title text__transform--uppercase">{title}</h2>
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default SectionRecommended;
