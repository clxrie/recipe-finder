function RecipeCard({meal, likeButton}){
    

    return(
        <>
        <div>
            <img src={meal.strMealThumb} alt={meal.strMeal} width="200"></img>
            <h3>{meal.strMeal}</h3>
            <p>{meal.strArea}</p>
            <button className="save-btn"
                    onClick={() => likeButton(meal)}>
                ❤️
            </button>
        </div>
        </>
    );

}
export default RecipeCard