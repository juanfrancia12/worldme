import React, { useState } from "react";
import { Link } from "react-router-dom";

import swal from "sweetalert";

import { data } from "common/data/home/index.js";
import { ActionMessage } from "modules/common/ActionMessage";

const SectionSubscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptPolitic, setAcceptPolitic] = useState(false);
  const [isActiveFeedback, setIsActiveFeedback] = useState(false);
  const [isErrorFeedback, setIsErrorFeedback] = useState(false);

  const onCloseFeedback = () => {
    setIsActiveFeedback(false);
  };

  const OnSubmitSubscribe = (e) => {
    e.preventDefault();
    console.log("press submit");

    if (name === "" || email === "") {
      setIsActiveFeedback(true);
      setIsErrorFeedback(true);
      console.log("error");
      return;
    }

    setIsActiveFeedback(true);
    setIsErrorFeedback(false);
    console.log("success");

    // const title = "Incorrect dates";
    // const content = "Check and try again";
    // const icon = "error";
    // swal(title, content, icon);
  };

  return (
    <>
      <section className="padding__section section grid__layout--2 subscribe">
        <img src={data.subscribe.image} alt="" className="image" />
        <div className="subscribe__container">
          <p className="title title__subscribe">
            Suscríbete a nuestro boletín y recibe 10% de dscto. en tu primera
            compra.
          </p>
          <form onSubmit={OnSubmitSubscribe} className="subscribe__form">
            <input
              type="text"
              className="input"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="input"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="politica" className="subscribe__politic">
              <input
                type="checkbox"
                name="politica"
                id="politica"
                value="politica"
                defaultChecked={acceptPolitic}
                onClick={() => setAcceptPolitic(!acceptPolitic)}
                // onClick={() => alert("hola click")}
              />
              <p>
                He leído y acepto la{" "}
                <strong>
                  <Link to="">politica de proteccion de datos personales</Link>
                </strong>
              </p>
            </label>
            <button type="submit" className="button button__secondary button__form">
              Enviar
            </button>
          </form>
        </div>
      </section>
      {isActiveFeedback && (
        <ActionMessage
          isActive={isActiveFeedback}
          title={isErrorFeedback ? "ERROR" : "SUCCESS"}
          description={
            isErrorFeedback
              ? "Por favor, verifique los campos"
              : "Gracias por suscribirte."
          }
          onVisibleInactive={onCloseFeedback}
        />
      )}
    </>
  );
};

export default SectionSubscribe;
