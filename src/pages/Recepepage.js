import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Ingredients from "../Components/Ingredients";

const Recepepage = ({}) => {
  const [data, setData] = useState([]);
  const [size, setSize] = useState(1000);
  const [btnSelected, setBtnSelected] = useState("ingredients");

  useEffect(() => {
    if (localStorage.recepeSelected) {
      setData(JSON.parse(localStorage.getItem("recepeSelected")));
    } else {
      return;
    }
  }, []);

  function updateSelectedBtn(e) {
    setBtnSelected(e.target.id);
  }

  return (
    <div className="recepePage">
      <h1>React Cook</h1>
      <h2>{data.strMeal}</h2>
      <h3>Origin : {data.strArea}</h3>
      <img src={data.strMealThumb} alt={"photo " + data.strMeal} />
      <div className="infos">
        <button
          id="ingredients"
          onClick={(e) => updateSelectedBtn(e)}
          className={btnSelected == "ingredients" ? "nav-active" : ""}
        >
          Ingrédients
        </button>
        <button
          id="instructions"
          onClick={(e) => updateSelectedBtn(e)}
          className={btnSelected == "instructions" ? "nav-active" : ""}
        >
          Instructions
        </button>
        {/* <Ingredients data={data} />
        <p>{data.strInstructions}</p> */}
        {btnSelected == "ingredients" ? (
          <Ingredients data={data} />
        ) : (
          <p>{data.strInstructions}</p>
        )}
      </div>
      <NavLink to="/">
        <button className="btnnav">retour</button>
      </NavLink>
    </div>
  );
};

export default Recepepage;
