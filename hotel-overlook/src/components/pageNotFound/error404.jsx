import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <h1>Siden blev ikke fundet</h1>
      <p>
        <Link to="/">Gå til forsiden</Link>
      </p>
    </>
  );
};

export default Error404;