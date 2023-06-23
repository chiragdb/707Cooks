import "./navBar.css"
import {
    Link
} from "react-router-dom";

const NavBar = ({ }) => {
    return (
        <header className="App-header">
            <Link class="home-button" to="/707cooks/"><h1>MyFridgeCookbook</h1></Link>
            <ul id="navbar-list">
                <li> <Link id="login-button" to={"/707cooks/auth/login"}> Login </Link></li>
                <li><Link id="fridge-button" to="/707cooks/fridge">Fridge</Link></li>
                <li><Link id="signout-button" to={"/707cooks/auth/signout"}> Sign Out </Link></li>
            </ul>
        </header>
    )
}

export default NavBar

