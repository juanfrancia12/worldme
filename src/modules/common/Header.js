import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
// import { ActionMessage } from "modules/common/ActionMessage";

import { useStateActive } from "common/hooks/useStateActive";

const NAME_WEB = "WorldMe";

const LinksHeader = [
  {
    id: 1,
    name: "Mujer",
    link: "women",
  },
  {
    id: 2,
    name: "Hombre",
    link: "man",
  },
  {
    id: 3,
    name: "Niños",
    link: "boys",
  },
  {
    id: 4,
    name: "Básicos",
    link: "basics",
  },
  {
    id: 5,
    name: "Deportes",
    link: "sports",
  },
  {
    id: 6,
    name: "Promociones",
    link: "promotions",
  },
];

const OptionsHeader = [
  {
    id: 1,
    icon: <FaSearch className="icon" />,
    name: "Buscar",
  },
  {
    id: 2,
    icon: <FaUserAlt className="icon" />,
    name: "Mi cuenta",
  },
  {
    id: 3,
    icon: <FaShoppingCart className="icon" />,
    name: "Carrito",
  },
];

export const Header = () => {
  const toggleHeader = useStateActive();
  const { isActive, onMenuToggle } = toggleHeader;

  const OnActiveFeedback = (e) => {
    console.log(e);
  };

  // let nameURL = window.location.pathname;
  // console.log("id", nameURL.replace(/\//g, ""))

  return (
    <>
      <header className="padding__section header">
        <div className="logo">
          <Link to={"/"} className="logo__title">
            <h1>{NAME_WEB}</h1>
          </Link>
          <GiHamburgerMenu className="icon icon__menu" onClick={onMenuToggle} />
        </div>
        <nav>
          <ul className={`nav ${isActive && "nav__toggle"}`}>
            <Link
              to={"/worldme"}
              className="logo__title nav__item--logo"
              onClick={onMenuToggle}
            >
              <h1>{NAME_WEB}</h1>
            </Link>
            <div className="nav__item--close" onClick={onMenuToggle}>
              <AiOutlineClose className="icon" />
            </div>
            {LinksHeader.map((item) => {
              const { id, name, link } = item;
              return (
                <NavLink
                  key={id}
                  to={`/worldme/${link}`}
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                  })}
                  className={({ isActive }) =>
                    `nav__item ${isActive && "nav__item--select"}`
                  }
                >
                  <li onClick={onMenuToggle}>{name}</li>
                </NavLink>
              );
            })}
          </ul>
        </nav>
        <div className="options">
          {OptionsHeader.map((item) => {
            const { id, icon, name } = item;
            return (
              <div key={id} className="options__item">
                {icon}
                {name}
              </div>
            );
          })}
        </div>

        {/* <ActionMessage
          isActiveFeedback={true}
          title="Message"
          message="Esta es la descripcion"
          OnActiveFeedback={OnActiveFeedback}
        /> */}
      </header>
    </>
  );
};
