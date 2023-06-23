import React from 'react';
import SignUp from './SignUp';
const SignUpPage = ({email, setEmail, loggedIn, setLoggedIn}) => {
    return (
        <div id="auth">
            {/* <h1>707 Cooks</h1>
            <h2>Sign Up to Revolutionize Your Meals</h2> */}
            <SignUp email={email} setEmail={setEmail} loggedIn = {loggedIn} setLoggedIn={setLoggedIn}></SignUp>
            {/* <p>Already a user?</p> 
            <Link to={`/auth/login`}>Log In</Link> */}
        </div>
        
    )
}
export default SignUpPage