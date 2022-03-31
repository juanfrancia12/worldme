import React from "react";
import ButtonScrollTop from "./ScrollTop";
import { Link } from "react-router-dom";

import {
  IoLogoWhatsapp,
  IoLogoFacebook,
} from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <ButtonScrollTop />
        <div className="footer__container grid__layout">
          <div className="footer__item">
            <h3 className="title">WorldMe</h3>
            <p className="description">
              Somos una empresa de venta de ropa para niños, hombre y mujeres;
              para toda ocasión.
            </p>
          </div>
          <div className="footer__item">
            <h3 className="title">Enlaces</h3>
            <nav>
              <ul className="footer__nav">
                <li>
                  <a href="#header">Inicio</a>
                </li>
                <li>
                  <Link to="worldme/women">Mujer</Link>
                </li>
                <li>
                  <Link to="worldme/men">Hombre</Link>
                </li>
                <li>
                  <Link to="worldme/boys">Niños</Link>
                </li>
                <li>
                  <Link to="worldme/basics">Básicos</Link>
                </li>
                <li>
                  <Link to="worldme/sports">Deportes</Link>
                </li>
                <li>
                  <Link to="worldme/promotions">Promociones</Link>
                </li>
              </ul>
              <div className="line__separator"></div>
              <ul className="footer__nav">
                <li>
                  <Link to="">Acerca de nosotros</Link>
                </li>
                <li>
                  <Link to="">Preguntas frecuentes</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__item">
            <h3 className="title">Contáctanos</h3>
            <div className="footer__contact">
              <Link to="https://www.instagram.com">
                <AiFillInstagram className="icon icon__contact" />
              </Link>
              <Link to="https://www.whatsapp.com">
                <IoLogoWhatsapp className="icon icon__contact" />
              </Link>
              <Link to="https://www.facebook.com">
                <IoLogoFacebook className="icon icon__contact" />
              </Link>
            </div>
          </div>
        </div>
        <div className="padding__section section__background--dark">
        Creado por @Juan Francia Sánchez
      </div>
      </footer>
    </>
  );
};
