import React from 'react';
import { initializeApp } from 'firebase/app';
import {getAuth, signOut} from 'firebase/auth'
import {Link} from 'react-router-dom';
import "./Logout.css"

const SignOut = ({isLoggedIn, setLoggedIn}) => {
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

    async function userSignOut() {

        await signOut(auth)
        .then((res) => {
            setLoggedIn(false);
        })
        .catch(err => alert(err.message));
        //const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        //promise.catch(e=>alert(e.message));
      }

    return (
        <div id="cover">
            <h1>Sign Out</h1>
            <div onClick = {() => userSignOut()} id='signOut'> <Link to={`/707cooks/`}>Sign Out</Link> </div>
        </div>
    )

}
export default SignOut