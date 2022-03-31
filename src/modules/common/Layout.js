import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <div id="header" className="section__background--dark"></div>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
