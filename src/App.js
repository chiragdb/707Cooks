import './App.css';
import {getInitialRecipes} from "./components/Recipes/api";
import React, {useState, useEffect} from "react";
import RecipePage from "./components/Recipes/recipePage"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import RecipeDetails from "./components/Recipes/recipeDetails";
import Fridge from "./components/Fridge/Fridge";
import LoginPage from './components/Auth/LoginPage';
import SignUpPage from './components/Auth/SignUpPage';
import Logout from './components/Auth/Logout';
import NavBar from './components/NavBar/navBar';

function App() {
    const [recipes, setRecipes] = useState([])
    const [listResults, setListResults] = useState([])
    //const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [userFoodList, setuserFoodList] = useState([]);


     function getInitialList() {
        getInitialRecipes(listResults).then(json => {
            //json = json.results
            setRecipes(json.recipes);
            setListResults(json.recipes);
            //setLoading(false)
        }).catch(error => {
            console.log(error)
        })
    }
    useEffect(() => {
        getInitialList()
        var fridgeButton = document.getElementById("fridge-button");
        var signOutButton = document.getElementById("signout-button");
        var loginButton = document.getElementById("login-button");
        if (!loggedIn) {
            loginButton.hidden = false;
            signOutButton.hidden = true;
            fridgeButton.hidden = true;
        }    
        if (loggedIn) {
            fridgeButton.hidden = false;
            loginButton.hidden = true;
            signOutButton.hidden = false;
            
        }
    }, [loggedIn, setLoggedIn])

    return (
        <Router>
            <div id="recipe-home-page">
                <NavBar/>
                <Routes>
                    <Route path="/707cooks/" element={
                        <RecipePage recipes={recipes}
                                    setRecipes={setRecipes}
                                    listResults={listResults}
                                    setListResults={setListResults}/>} exact>
                    </Route>
                    <Route path="/707cooks/recipe/:id" element={
                        <RecipeDetails recipes={recipes}/>} exact>
                    </Route>
                    <Route exact path = "/707cooks/auth/login" element={<LoginPage email = {email} setEmail = {setEmail} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}></LoginPage>}/>
                    <Route exact path = "/707cooks/auth/signup" element={<SignUpPage loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}> </SignUpPage>}/>
                    <Route exact path = "/707cooks/auth/signout" element={<Logout loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}></Logout>}/>
                    <Route exact path = "/707cooks/fridge" element={<Fridge email={email} setEmail={setEmail} userFoodList={userFoodList} setUserFoodList={setuserFoodList}/>}/>
                </Routes>
                {/* <footer><p>Made with ❤️ by Suraj, Chirag, Chirag, and Lakshay</p></footer> */}
            </div>
        </Router>
    );
}

export default App;
