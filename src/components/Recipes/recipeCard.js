import {
    Link
} from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    return (
        <Link id="recipe-details-link" to={`/707cooks/recipe/${recipe.id}`}>
            <div id="recipe-card">
                <img id="recipe-img" alt="Missing food!" src={recipe.image}/>
                <div id="recipe-info">
                    <h1>{recipe.title}</h1>
                    <p>{recipe.creditsText}</p>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard

