import { useState } from "react";
import RecipeCard from "./RecipeCard";

function SearchBar({likeButton}) {
  const [searchInput, setSearchInput] = useState("");
  const [meals, setMeals] = useState([]);

  function inputSearch(event) {
    setSearchInput(event.target.value);
  }

  async function handleSearch() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    );
    const data = await response.json();
    console.log(data.meals);
    setMeals(data.meals || []);
  }

  return (
    <div className="main-app">
      <input
        type="text"
        placeholder="🔍 Search recipe..."
        value={searchInput}
        onChange={inputSearch}
      />
      <button onClick={handleSearch}>Search</button>

      {meals.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} likeButton={likeButton} />
      ))}
    </div>
  );
}

export default SearchBar;