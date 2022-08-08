import React from "react";

const SectionBanner = ({ products }) => {
  return (
    <>
      {products.women
        .filter((product) => product.islarge !== false)
        .map((product) => {
          const { image, name } = product;
          return (
            <div  key={product.id} className="banner">
              <div className="banner__image">
                <img src={image} alt={name} className="card__item--image" />
              </div>
              <h1 className="title title__section">{name}</h1>
            </div>
          );
        })}
    </>
  );
};

export default SectionBanner;
