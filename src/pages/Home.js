import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";

const Home = () => {
  const [inputSearch, setInputSearch] = useState(
    localStorage.getItem("research") ? localStorage.getItem("research") : ""
  );
  const [data, setData] = useState([]);

  function searchUpdate(e) {
    e.preventDefault();
    setInputSearch(e.target.value);
    StoreResearch();
  }

  function submitForm(e) {
    e.preventDefault();
    e.target[0].value = "";
  }

  function StoreResearch() {
    localStorage.setItem("research", inputSearch);
  }

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((res) => setData(res.data.meals));
  }, [inputSearch]);

  return (
    <div className="App">
      <h1>React Cook</h1>
      <form className="form" on onSubmit={(e) => submitForm(e)}>
        <input
          type="text"
          placeholder="Ingredient"
          on
          onChange={(e) => searchUpdate(e)}
        />
      </form>
      <div className="recepes">
        <ul>
          {data &&
            data.map((recepe) => <Card id={recepe.idMeal} recepe={recepe} />)}
        </ul>
      </div>
    </div>
  );
};

export default Home;
