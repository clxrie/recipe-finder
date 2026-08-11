import SearchBar from "./SearchBar"
import RecipeCard from "./RecipeCard"
import { useState, useEffect } from "react";
import { func } from "prop-types";


function App() {
   const [like, setLike] = useState(() =>{
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
   });
   const [seeFavorite, setSeeFavorite] = useState(false);

    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(like));
    }, [like]);


    function likeButton(meal){
        if(like.some(l => l.idMeal === meal.idMeal)) return;
        setLike([...like, meal]);
        console.log("Saved:", meal.strMeal);
    }

    function toggleFavorite(){
       setSeeFavorite(s => !s);
    }
  return (
     <>
      <h1>Recipe Finder</h1>
      <button onClick={toggleFavorite}>
        {seeFavorite ? "Back to Search" : `View Favorites (${like.length})`}
      </button>

      {seeFavorite ? (
        like.length > 0 ? (
          like.map(meal => (
            <RecipeCard key={meal.idMeal} meal={meal} likeButton={likeButton} />
          ))
        ) : (
          <p>No favorites yet!</p>
        )
      ) : (
        <SearchBar likeButton={likeButton} />
      )}
    </>
  );
}

export default App
