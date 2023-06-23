import React from 'react';
import Login from './Login';
import "./LoginPage.css"
const LoginPage = ({email, setEmail, loggedIn, setLoggedIn}) => {
    return (
        <div id="auth">
            {/* <h1>707 Cooks</h1>
            <h3>Log In to Revolutionize Your Meals</h3> */}
            <Login email={email} setEmail={setEmail} loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Login>
            {/* <p>Not a user yet?</p> 
            <Link to={`/auth/signup`}>Sign Up</Link> */}
        </div>
        
    )
}
export default LoginPage