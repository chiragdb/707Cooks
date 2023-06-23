import {getFirestore, getDoc, doc} from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import React, { useState, useEffect } from "react";
import FridgeItem from "./FridgeItem";

const FridgeList = ({email, userFoodList, setUserFoodList, foodSearch, setFoodSearch, foodDelete, setFoodDelete}) => {
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

    const [displayFoods, setDisplayFoods] = useState([]);
    const [displayContent, setDisplayContent] = useState(<h1 id="no-food">No food in fridge</h1>)
    const [foodLoading, setFoodLoading] = useState(true);

    async function getFood(email) {
        console.log(email);
        const docRef =  doc(db, "fridge", email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setUserFoodList(docSnap.data());
            if (foodLoading) {setFoodLoading(false);}
            if (foodSearch) {setFoodSearch(false);}
            if (foodDelete) {setFoodDelete(false);}
        }
    }
    
    function loadFood() {
        console.log(userFoodList["foods"]);
        if (foodLoading == false || userFoodList["foods"] != undefined) {
            setDisplayFoods([]);
            setDisplayContent(displayFoods);
            if (Object.keys(userFoodList["foods"]).length == 0) {
                setDisplayContent(<h1>No food in fridge</h1>);
            } else {
                Object.keys(userFoodList["foods"]).forEach(function (key, index) {
                    displayFoods.push(<FridgeItem index={index} key={key} food={key} data={userFoodList["foods"][key]} foodDelete={foodDelete} setFoodDelete={setFoodDelete} email={email}></FridgeItem>);
                })
                setDisplayContent(displayFoods);
            }
        }
    }

    useEffect(() => {
        getFood(email);
        loadFood();
    }, [email, foodLoading, foodSearch, setFoodSearch, foodDelete, setFoodDelete])
    console.log(displayContent);
    return (
        <div id="fridge-content">{displayContent}</div>
    )
    
}
export default FridgeList



/*export async function getFood(email, db, setUserFoodList, setFoodLoading) {
    console.log(email);
    const docRef =  doc(db, "fridge", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserFoodList(docSnap.data());
        setFoodLoading(false); 
    }
}

export function loadFood(foodResults, foodLoading, userFoodList, setDisplayContent) {
    if (foodLoading == false) {
        Object.keys(userFoodList["foods"]).forEach(function (key, index) {
            foodResults.push(<FridgeItem index={index} food={key} data={userFoodList["foods"][key]}></FridgeItem>);
        })
        setDisplayContent(foodResults);
    } 
}*/