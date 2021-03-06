import React from "react";

const SectionHomeCards = ({ data, islargeleft, dataSlice, isleft }) => {
  const isSliceThree = dataSlice === 3 ? true : false;

  const initialData = isleft ? 0 : 2;
  const endData = isleft ? 3 : 5;

  const calculatePercentage = (isPercentage, amount, percentage) => {
    let newAmount;

    if (isPercentage) {
      const amountPercentage = amount * (percentage / 100);
      newAmount = amount - amountPercentage;
      return newAmount.toFixed(2);
    }

    newAmount = amount - percentage;

    return newAmount.toFixed(2);
  };

  return (
    <section className="padding__section section">
      <div
        className={`grid__layout ${
          islargeleft ? "grid__layout--left" : "grid__layout--right"
        }`}
      >
        {data
          .slice(isSliceThree ? initialData : 0, isSliceThree ? endData : 5)
          .map((item) => {
            const {
              id,
              image,
              name,
              description,
              price_old,
              price_new,
              islarge,
              discount,
            } = item;
            return (
              <ul
                key={id}
                className={`card__item card__${
                  islarge ? "fieldset" : "product"
                }`}
              >
                {islarge ? (
                  <>
                    <div className="card__content card__content--fieldset">
                      <img
                        src={image}
                        alt={name}
                        className="card__item--image"
                      />
                      <div className="section__fieldset">
                        <fieldset className="fieldset__item">
                          <legend className="fieldset__item--legend">
                            {name}
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                    <div className="card__footer card__footer--center">
                      <button className="button button__secondary">
                        Ver todo
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="card__content card__content--product">
                      <img
                        src={image}
                        alt={name}
                        className="card__item--image"
                      />
                    </div>
                    <div
                      className={`card__product--discount product__discount--${
                        discount.type === "percentage" ? `percentage` : `money`
                      }`}
                    >
                      {discount.type === "percentage"
                        ? `${discount.amount} %`
                        : `S/. ${discount.amount}`}
                    </div>
                    <div className="card__footer card__footer--product card__footer--justify">
                      <h2 className="title">{name}</h2>
                      <h3 className="subtitle">{description}</h3>
                      <div className="card__price--old">
                        <h3 className="description">Antes</h3>
                        <h3 className="description description__gray description__line--through">{`S/. ${price_old}`}</h3>
                      </div>
                      <div className="card__price--new">
                        <h3 className="description description__bold">
                          Online
                        </h3>
                        <h3 className="description description__red">
                          {/* {`S/. ${price_new}`} */}
                          {`S/. ${calculatePercentage(
                            true,
                            price_old,
                            discount.amount
                          )}`}
                        </h3>
                      </div>
                    </div>
                  </>
                )}
              </ul>
            );
          })}
      </div>
    </section>
  );
};

export default SectionHomeCards;
