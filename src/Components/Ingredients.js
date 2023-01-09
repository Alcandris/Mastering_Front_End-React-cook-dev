import React from "react";

const Ingredients = ({ data }) => {
  let ingredients = [];

  for (let i = 1; i < 21; i++) {
    if (data[`strIngredient${i}`]) {
      let ingredient = data[`strIngredient${i}`];
      let measure = data[`strMeasure${i}`];
      ingredients.push(`${ingredient}  -  ${measure}`);
    }
  }

  return (
    <div className="list">
      {ingredients.map((ingredient) => (
        <li>{ingredient}</li>
      ))}
    </div>
  );
};

export default Ingredients;
