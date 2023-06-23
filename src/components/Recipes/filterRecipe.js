import React, { useState } from "react";
import "./filterRecipe.css"
import { BsFilter } from "react-icons/bs";
import {BsXCircleFill} from "react-icons/bs"
import {getFilteredRecipes} from "./api";

export default function RecipeModal({recipes, setRecipes, listResults, setListResults}) {
    const [recipemodal, setModal] = useState(false);
    const [cuisine, setCuisine] = useState()
    const [ingredients, setIngredients] = useState()

    const toggleModal = () => {
        setModal(!recipemodal);
    };

    if (recipemodal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    const applyCuisine = (e) => {
        setCuisine(e.target.value)
        //console.log(cuisine)
    }

    const applyIngredients = (e) => {
        let ingredientList = e.target.value.replace(/\s/g, "")
        setIngredients(ingredientList)
        //console.log(ingredients)
    }

    const setFridgeIngredients = () => {
      let ingredientList = "" //pull ingredient list based on fridge from db
      setIngredients(ingredientList)
    }

    const requestRecipes = async () => {
        //make new request for recipes and update recipe list
        // applyCuisine()
        // applyIngredients()
        if (!cuisine) setCuisine("")
        if (!ingredients) setIngredients("")
        let results = await getFilteredRecipes(cuisine, ingredients)
        setListResults(results.results)
        toggleModal()
    }

    return (
        <>
          <button onClick={toggleModal} className="btn-modal">
            <BsFilter />
          </button>
          {recipemodal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <h2>Filter By</h2>
                <div className = "search-cuisine">
                    <input type = "text" placeholder="Search cuisine..." onChange={applyCuisine}/>
                    <h5>Maximum cuisine entries: 1</h5>
                </div>
                <div className = "search-ingredients">
                    <input type = "text" placeholder="Search ingredients..." onChange={(applyIngredients)}/>
                    <div className = "instructions">
                      <h5>Please enter ingredients as comma separated values.</h5>
                      <h5>Example: "Ground Beef, Chicken Breast, White Rice"</h5>
                    </div>
                </div>
                {/* <div className = "ingredient-toggle">
                        <input type = "checkbox" value = "Use ingredients from fridge" onClick={setFridgeIngredients}/>
                        Use ingredients from fridge
                </div> */}
                {/* <button onClick = {toggleButton} className="ingredient-toggle">
                    Use ingredients from fridge: 
                    {state ? ' Yes' : ' No'}
                </button> */}
                <div className = "apply-filters" onClick={requestRecipes}>
                    <button className="apply-filters-button">Apply Filters</button>
                </div>
                <button className="close-modal" onClick={toggleModal}>
                  <BsXCircleFill size={20} />
                </button>
              </div>
            </div>
          )}
        </>
      );
}