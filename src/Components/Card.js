import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Card = ({ recepe }) => {
  function storeRecepe() {
    localStorage.setItem("recepeSelected", JSON.stringify(recepe));
  }

  return (
    <li className="card" onClick={() => storeRecepe()}>
      <h2>{recepe.strMeal}</h2>
      <h3>Origin : {recepe.strArea}</h3>
      <img src={recepe.strMealThumb} alt={"photo " + recepe.strMeal} />
      <p>{recepe.strInstructions}</p>
      <NavLink to="/recepePage">
        <button>Décourvir la recette</button>
      </NavLink>
    </li>
  );
};

export default Card;
