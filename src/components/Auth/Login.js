import React from 'react';
import { initializeApp } from 'firebase/app';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import "./Login.css"
import {Link} from 'react-router-dom';

const Login = ({email, setEmail, loggedIn, setLoggedIn}) => {

    const firebaseConfig = {
        apiKey: "AIzaSyDaWHs0lqIPvdN5lNWiELGaixpQcNs_xT0",
        authDomain: "cooks-26916.firebaseapp.com",
        projectId: "cooks-26916",
        storageBucket: "cooks-26916.appspot.com",
        messagingSenderId: "968547215745",
        appId: "1:968547215745:web:1da40d971e3a22bdb76080",
      };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);



    async function logIn() {
        var emailInput = document.getElementById('email');
        var password = document.getElementById('password');

        await signInWithEmailAndPassword(auth, emailInput.value, password.value)
        .then((res) => {
            setEmail(emailInput.value);
            setLoggedIn(true);
        })
        .catch(err => alert(err.message));
        
      }

    return (

        <div className = "cover">
            <h1>Log In</h1>
            <h2>Revolutionize Your Meals</h2>
            <input type="email" id="email" placeholder="email..."></input>
            <input type="password" id="password" placeholder="password..."></input>
            <div className = "login-btn" onClick = {() => logIn()} id = 'login'><Link to={`/707cooks/fridge`}>Log In</Link></div>
            <p>Don't have an account? <Link to={`/707cooks/auth/signup`}>Sign Up</Link></p> 
        </div>

        // <div id="login">
        //     <div id ="email-div">
        //         <input type="email" id="email" placeholder="email"></input>
        //     </div>
        //     <div id ="password-div">
        //         <input type="password" id="password" placeholder="password"></input>
        //     </div>
            

        //     <button onClick = {() => logIn()} id='login'> Log In </button>
        // </div>
        
    )

}
export default Login