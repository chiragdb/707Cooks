import React from 'react';
import { initializeApp } from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {Link} from 'react-router-dom';
import "./SignUp.css"

const SignUp = ({email, setEmail, loggedIn, setLoggedIn}) => {
    //const [username, setUsername] = useState("");
    //const [password, setPassword] = useState("");

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



    async function signUp() {
        var email = document.getElementById('email');
        var password = document.getElementById('password');

        await createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
            setLoggedIn(true);
        })
        .catch(err => alert(err.message));
    
        //const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        
        //promise.catch(e=>alert(e.message));
      
        
      }

    return (
        <div className = "cover">
            <h1>Sign Up</h1>
            <h2>Revolutionize Your Meals</h2>
            <input type="email" id="email" placeholder="email..."></input>
            <input type="password" id="password" placeholder="password..."></input>
            <div className = "signup-btn" onClick = {() => signUp()} id = 'signup'><Link to={`/707cooks/fridge`}>Sign Up</Link></div>
            <p>Already a user? <Link to={`/707cooks/auth/login`}>Log In</Link></p> 
        </div>


        // <body class = "container">
        //     <form action = "" class = "login-form">
        //         <div class = "flex-input">
        //             <input type="email" id="email" placeholder="email..."></input>
        //         </div>
        //         <div class = "flex-input">
        //             <input type="password" id="password" placeholder="password..."></input>
        //         </div>
        //         <div id = "signup-button">
        //             <button onClick = {() => signUp()} id='signup'> Sign up </button>
        //         </div>
        //     </form>
        // </body>  
        
    )
}
export default SignUp