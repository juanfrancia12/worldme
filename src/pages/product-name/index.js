import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { useProducts } from "common/hooks/useProducts";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [productName, setProductName] = useState({});

  const { category, id, name } = useParams();
  const navigate = useNavigate();

  const { products } = useProducts();

  useEffect(() => {
    setProductName(
      products[category].find(
        (item) => item.name.toLowerCase().replace(" ", "_") === name
      )
    );
    setLoading(false);
  }, [category, id, name, products]);

  if (loading) {
    return <div className="">Cargandooo...</div>;
  }

  if (!productName) {
    return (
      <div className="">
        Producto no encontrado.
        <Link to={"/"} style={{ color: "blue" }}>
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <section className="padding__section section">
      <div className="section__heading">
        <button
          className="button button__secondary"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
        <div className="title">{`Detalle del producto: ${productName.name}`}</div>
      </div>
      <article>
        <div className="grid__layout--2 card__details--product">
          <img
            src={productName.image}
            alt=""
            className="image card__details--image"
          />
          <div className="card__details--content">
            <div className="card__details--information">
              <div className="section__heading">
                <div className="title">{productName.name}</div>
                <div className="subtitle description__red">{`S/. ${productName.price_old}`}</div>
              </div>
              <div className="line__separator line__separator--secondary"></div>
              <div className="description">{productName.description}</div>
              <div className="description">{productName.discount.amount}</div>
              <div className="description">{productName.discount.type}</div>
              <div className="description">{productName.islarge}</div>
              <div className="description">{productName.price_old}</div>
            </div>
            <div className="card__options">
              <button className="button button__primary">
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Index;
