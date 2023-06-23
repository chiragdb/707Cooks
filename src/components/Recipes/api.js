import axios from "axios";

const API_KEY = "0b596eb23ab64fc88bbc7434922f3c52"

export const getInitialRecipes = async () => {
    const response = await axios.get('https://api.spoonacular.com/recipes/random?number=10&apiKey=' + API_KEY);
    // console.log(response);
    return response.data;
}

export const getFilteredRecipes = async (cuisine, ingredients) => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?number=10&cuisine=${cuisine}&includeIngredients=${ingredients}`;
    const response = await axios.get(`${url}&apiKey=${API_KEY}`);
    // console.log(url);
    // console.log(response.data);
    return response.data;
}

export const getFoodSearch = async (food) => {
    let url = `https://api.spoonacular.com/food/ingredients/search?query=${food}&apiKey=`+ API_KEY;
    const response = await axios.get(`${url}`);
    //console.log(response.data);
    return response.data;
}

export const getAnalyzedInstructions = async (id) => {
    let url = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`
    const response = await axios.get(`${url}?apiKey=${API_KEY}`)
    return response.data
}

export const getRecipeInformation = async (id) => {
    let url = `https://api.spoonacular.com/recipes/${id}/information`
    const response = await axios.get(`${url}?apiKey=${API_KEY}`)
    return response.data
}

export const getRecipeIngredients = async (id) => {
    let url = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json`
    const response = await axios.get(`${url}?apiKey=${API_KEY}`)
    return response.data
}

export const getRecipe = async (query) => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?number=10&query=${query}`
    const response = await axios.get(`${url}&apiKey=${API_KEY}`)
    return response.data
}

export const getIngredientInfo = async (id) => {
    let url = `https://api.spoonacular.com/food/ingredients/${id}/information`
    const response = await axios.get(`${url}?apiKey=${API_KEY}`)
    return response.data.image
}
