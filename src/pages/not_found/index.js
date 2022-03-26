import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <h3>Not found page</h3>
      <Link to={"/"}>Link home</Link>
    </>
  );
};

export default index;
