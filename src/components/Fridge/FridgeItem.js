import {getFirestore, doc, updateDoc, deleteField} from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import "./Fridge.css"

const FridgeItem = ({food, data, foodDelete, setFoodDelete, email}) => {
    const firebaseConfig = {
        apiKey: "AIzaSyDaWHs0lqIPvdN5lNWiELGaixpQcNs_xT0",
        authDomain: "cooks-26916.firebaseapp.com",
        projectId: "cooks-26916",
        storageBucket: "cooks-26916.appspot.com",
        messagingSenderId: "968547215745",
        appId: "1:968547215745:web:1da40d971e3a22bdb76080",
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    let imageSrc = "https://spoonacular.com/cdn/ingredients_100x100/" + data[2]
    console.log(imageSrc)

    async function removeFood() {
        const userDoc = doc(db, "fridge", email);
        await updateDoc(userDoc, {
            ["foods." + food]: deleteField()
        });
        setFoodDelete(true);
    }

    return (
        <div id="fridge-item">
            <img id="fridge-img" alt={data[2]} src={imageSrc}></img>
            <h1 id="food-name">{food}</h1>
            <h3>({data[0]})</h3>
            <h3>{data[1]}</h3>
            <button id="remove" onClick = {() => removeFood()}>Remove</button>
        </div>
    )


} 
export default FridgeItem
