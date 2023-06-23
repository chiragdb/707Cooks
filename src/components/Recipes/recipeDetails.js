import {useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {getAnalyzedInstructions, getRecipeInformation, getRecipeIngredients} from "./api";
import "./recipeDetails.css";

const RecipeDetails = () => {
    let {id} = useParams()

    const [instructions, setInstructions] = useState()
    const [summary, setSummary] = useState()
    const [ingredientData, setIngredientData] = useState()
    const [title, setTitle] = useState()
    const [image, setImage] = useState()
    const [load, setLoad] = useState(true)

    useEffect( () => {
        const fetchData = async () => {
            let instructionResponse = await getAnalyzedInstructions(id)
            setInstructions(instructionResponse[0].steps)

            let summaryResponse = await getRecipeInformation(id)
            setSummary(summaryResponse.summary.replace(/<\/?[^>]+(>|$)/g, ""))
            setTitle(summaryResponse.title)
            setImage(summaryResponse.image)

            let ingredientResponse = await getRecipeIngredients(id)
            setIngredientData(ingredientResponse.ingredients)

            setLoad(false)
        }

        fetchData().catch(console.error)

    },[id])

    if (!load) {
        const steps = instructions.map(step => <li>{step.step}</li>)
        const ingredients = ingredientData.map(ingredient => <li>{ingredient.name}, {ingredient.amount.us.value} {ingredient.amount.us.unit}</li>)

        return (
            <div id = "detail-view">
                <div id = "information">
                    <div id = "title">
                        <h1>{title}</h1>
                    </div>
                    <div id = "photo">
                        <img src = {image} alt="ingredient"></img>
                    </div>
                    <div id = "summary">
                        <h2>Summary</h2>
                        <p>{summary}</p>
                    </div>
                    <div id = "ingredients-instructions">
                        <div id = "ingredients">
                            <h2>Ingredients</h2>
                            <ul>{ingredients}</ul>
                        </div>
                        <div id = "instructions">
                            <h2>Instructions</h2>
                            <ol>{steps}</ol>
                        </div>
                        </div>
                
                </div>
            </div>



            // <div id="detail-view">
            //     <div id = "title">
            //         <h1>{title}</h1>
            //     </div>
            //     <div id = "summary">
            //         <div id = "title">
            //             <h2>Summary</h2>
            //         </div>
            //         <div id = "content">
            //             <p>{summary}</p>
            //         </div>
            //     </div>
            //     <div id = "ingredients">
            //         <div id = "title">
            //             <h2>Ingredients</h2>
            //         </div>
            //         <div id = "content">
            //             <ul>{ingredients}</ul>
            //         </div>
            //     </div>
            //     <div id = "instructions">
            //         <div id = "title">
            //             <h2>Instructions</h2>
            //         </div>
            //         <div id = "content">
            //             <ol>{steps}</ol>
            //         </div>
            //     </div>
            // </div>

        )
    }
}

export default RecipeDetails