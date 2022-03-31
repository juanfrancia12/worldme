import React from "react";
import { Link, NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { useMenuToggle } from "common/hooks/useMenuToggle";
import { LinksHeader, LinkHome } from "common/constants/LinksHeader";
import { OptionsHeader } from "common/constants/OptionsHeader";
import { NAME_COMPANY } from "common/constants/Company";

export const Header = () => {
  const { isMenuToggle, onMenuToggle } = useMenuToggle();

  return (
    <>
      <header className="padding__section header">
        <div className="logo">
          <Link to={LinkHome.link} className="logo__title">
            <h1>{LinkHome.name}</h1>
          </Link>
          <GiHamburgerMenu className="icon icon__menu" onClick={onMenuToggle} />
        </div>
        <nav>
          <ul className={`nav ${isMenuToggle && "nav__toggle"}`}>
            <Link
              to={LinkHome.link}
              className="logo__title nav__item--logo"
              onClick={onMenuToggle}
            >
              <h1>{LinkHome.name}</h1>
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
      </header>
    </>
  );
};
