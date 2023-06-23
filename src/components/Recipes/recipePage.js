import SearchBar from "./searchBar";
import React from "react";
import PropTypes from 'prop-types';
import RecipeCard from "./recipeCard";
import "./Recipes.css";

const RecipePage = ({recipes, setRecipes, listResults, setListResults}) => {
    const results = listResults.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe}/>)
    const content = (results?.length ? results : <h1>No recipes found!</h1>)

    return (
        <div id="recipe-list">
            <SearchBar listResults={listResults}
                       setListResults={setListResults}
                       recipes={recipes}
                       setRecipes={setRecipes}/>
            <div>{content}</div>
        </div>
    )
}

RecipePage.propTypes = {
    recipes: PropTypes.array,
    listResults: PropTypes.array
}

export default RecipePage