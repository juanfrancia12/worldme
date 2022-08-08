import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ value, options, onChange }) => {
  return (
    <div className="select">
      <select value={value} onChange={onChange}>
        {/* <option value="a-z">A - Z</option> */}
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <i></i>
    </div>
  );
};

const calculatePercentage = (isPercentage, amount, count) => {
  let newAmount;

  if (!isPercentage) {
    newAmount = amount - count;
  } else {
    const amountPercentage = amount * (count / 100);
    newAmount = amount - amountPercentage;
  }

  return newAmount.toFixed(2);
};

function SortArray(x, y, ver) {
  console.log("ver: " + ver);
  if (ver === "default") {
    return;
  } else if (ver === "z-a") {
    return y.name.localeCompare(x.name);
  } else if (ver === "a-z") {
    return x.name.localeCompare(y.name);
  } else if (ver === "price-descending") {
    return y.price_new - x.price_new;
  } else if (ver === "price-ascending") {
    return x.price_new - y.price_new;
  }
}

const SectionList = ({ products, category }) => {
  const [valueSelect, setValueSelect] = React.useState("Default");
  const [textSearch, setTextSearch] = React.useState("");

  const handleFoodChange = (event) => {
    setValueSelect(event.target.value);
  };

  const handleSearch = (e) => {
    setTextSearch(e.target.value);
  };

  const dataProduct = products.slice()
  .filter(
    (item) =>
      item.islarge !== true
  )
  .map((item) => {
    const { discount, price_old } = item;
    return {
      ...item,
      price_new: calculatePercentage(
        discount?.type === "percentage" ? true : false,
        price_old,
        discount?.amount
      ),
    };
  });

  return (
    <div className="section__content">
      <div className="section__content--heading">
        <div className="section__list--count subtitle">{`Total de productos: ${dataProduct?.length}`}</div>
        <div className="section__list--options">
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) => handleSearch(e)}
          />
          <Dropdown
            options={[
              { id: 1, label: "Default", value: "default" },
              { id: 2, label: "A - Z", value: "a-z" },
              { id: 3, label: "Z - A", value: "z-a" },
              { id: 4, label: "Precio ascendente", value: "price-ascending" },
              { id: 5, label: "Precio descendente", value: "price-descending" },
            ]}
            value={valueSelect}
            onChange={handleFoodChange}
          />
        </div>
      </div>
      <div className="line__separator line__separator--secondary"></div>
      <div className="section__content--list">
        <div className="grid__layout--product">
          {dataProduct
            .filter(
              (item) =>
                item.name.toLowerCase().includes(textSearch.toLowerCase())
            )
            .sort((x, y) => SortArray(x, y, valueSelect))
            .map((item) => {
              const {
                id,
                name,
                image,
                discount,
                description,
                price_old,
                price_new,
              } = item;
              return (
                <div key={id} className="card__item card__product--list">
                  <div className="card__content card__content--product">
                    <Link
                      to={`/worldme/product/${category}/${name
                        .toLowerCase()
                        .replace(" ", "_")}`}
                    >
                      <img
                        src={image}
                        alt={name}
                        className="card__item--image"
                      />
                    </Link>
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
                    <h3 className="subtitle text__ellipsis">{description}</h3>
                    <div className="card__price--old">
                      <h3 className="description">Antes</h3>
                      <h3 className="description description__gray description__line--through">{`S/. ${price_old}`}</h3>
                    </div>
                    <div className="card__price--new">
                      <h3 className="description description__bold">Online</h3>
                      <h3 className="description description__red">
                        {`S/. ${price_new}`}
                        {/* {`S/. ${calculatePercentage(
                          discount.type === "percentage" ? true : false,
                          price_old,
                          discount.amount
                        )}`} */}
                      </h3>
                    </div>
                  </div>
                  <div className="card__options">
                    <Link
                      to={`/worldme/product/${category}/${name
                        .toLowerCase()
                        .replace(" ", "_")}`}
                    >
                      <button className="button button__ghost">
                        Ver detalle
                      </button>
                    </Link>

                    <button className="button button__primary">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SectionList;
