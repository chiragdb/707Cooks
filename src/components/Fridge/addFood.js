import React, { useState } from "react";
import "./addFood.css"
import { getFoodSearch, getIngredientInfo } from "../Recipes/api"
import {getFirestore,  doc , setDoc, getDoc, updateDoc} from "firebase/firestore";
import { initializeApp } from 'firebase/app';
export default function FoodModal({ email, setFoodSearch}) {
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

  const [fridgemodal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!fridgemodal);
    if (fridgemodal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  };

  async function logFood() {
    console.log(email);
    var food = document.getElementById("food-bar").value;
    var count = document.getElementById("count-bar").value;
    var date = document.getElementById("date-bar").value;

    let searchResults = await getFoodSearch(food);
    var topResult = searchResults.results[0];
    let imagePath = await getIngredientInfo(topResult.id)
    let foodData = [count, date, imagePath];

    const userDoc = doc(db, "fridge", email);
    const userSnap = await getDoc(userDoc);

    if (userSnap.exists()) {
      const userRef = doc(db, "fridge", email);
      await updateDoc(userRef, {
        ["foods." + topResult.name]: foodData
      })
      setFoodSearch(true);
    } else {
      await setDoc(doc(db, "fridge", email), {
        email: email, 
        foods: {
            [topResult.name]: foodData
        }
      })
      setFoodSearch(true);
    }
    toggleModal();
  }

  return (
    <div id = "btn">
      <button onClick={toggleModal} className="fridge-btn-modal">
        Add Food +
      </button>
    
        {fridgemodal && (
              <div className="fridge-modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="fridge-modal-content">
                  <h2>Add Food to Fridge</h2>
                  <div className = "search-ingredients">
                    <input id="food-bar" type="text" placeholder="Search ingredients..." />
                    <input id="count-bar" type="text" placeholder="Input weight.." />
                    <input id="date-bar" type="text" placeholder="Input MM/DD/YYYY" />
                  </div>
                  <div className="add-food" onClick={() => logFood()}>Add Food</div>
                  <button className="close-modal" onClick={toggleModal}> x </button>
                </div>
              </div>
        )}
    </div>
  );
}