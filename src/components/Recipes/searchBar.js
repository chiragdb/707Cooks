import React, {useState} from 'react'
import PropTypes from "prop-types";
import Modal from "./filterRecipe";
import {getRecipe} from "./api";
import "./searchBar.css"

import { FaSearch } from "react-icons/fa";

function SearchBar({recipes, setRecipes, listResults, setListResults}) {
    const [query, setQuery] = useState()

    const updateQuery = (e) => {
        setQuery(e.target.value)
    }

    const handleSearch = async () => {
        let response = await getRecipe(query)
        setListResults(response.results)
    }

    return (
        <div className="search-filter">
            <Modal listResults={listResults}
                   setListResults={setListResults}
                   recipes={recipes}
                   setRecipes={setRecipes}/>
            <input id="search-bar"
                   type="text"
                   placeholder="Enter any recipe!"
                   onChange={updateQuery}/>
            <button id = "search-icon" onClick={handleSearch}><FaSearch size = {15}/></button>
        </div>
    )
}

export default SearchBar