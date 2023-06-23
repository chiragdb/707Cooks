import React, { useState } from "react";
import {getFirestore} from "firebase/firestore"; 
import { initializeApp } from 'firebase/app';
import FridgeList from "./FridgeList";
import FoodModal from "./addFood";

const Fridge = ({email, setEmail, userFoodList, setUserFoodList}) => {
    const firebaseConfig = {
        apiKey: "AIzaSyDaWHs0lqIPvdN5lNWiELGaixpQcNs_xT0",
        authDomain: "cooks-26916.firebaseapp.com",
        projectId: "cooks-26916",
        storageBucket: "cooks-26916.appspot.com",
        messagingSenderId: "968547215745",
        appId: "1:968547215745:web:1da40d971e3a22bdb76080",
    };
    const [foodSearch, setFoodSearch] = useState(false);
    const [foodDelete, setFoodDelete] = useState(false);

    const app = initializeApp(firebaseConfig);

    return (
        <div>
            <FoodModal email={email} setEmail={setEmail} foodSearch={foodSearch} setFoodSearch={setFoodSearch}></FoodModal>
            <FridgeList email={email} setEmail={setEmail} userFoodList={userFoodList} setUserFoodList={setUserFoodList} foodSearch={foodSearch} setFoodSearch={setFoodSearch} foodDelete={foodDelete} setFoodDelete={setFoodDelete}></FridgeList>
        </div>
        
    )


    
} 
export default Fridge

//            <FoodModal email={email} setEmail={setEmail}></FoodModal>
//<FoodModal email={email} setEmail={setEmail} foodSearch={foodSearch} setFoodSearch={setFoodSearch}></FoodModal>
//<FridgeList email={email} setEmail={setEmail} userFoodList={userFoodList} setUserFoodList={setUserFoodList} foodSearch={foodSearch} setFoodSearch={setFoodSearch}></FridgeList>


/*async function getFood(email) {
        console.log(email);
        const docRef =  doc(db, "fridge", email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setUserFoodList(docSnap.data());
            setFoodLoading(false); 
            setFoodSearch(false);
        }
    }

    function loadFood() {
        console.log("FOOD LAODING");
        console.log(foodLoading);
        if (foodLoading == false) {
            setDisplayFoods([]);
            setDisplayContent(displayFoods);
            Object.keys(userFoodList["foods"]).forEach(function (key, index) {
                displayFoods.push(<FridgeItem index={index} key={key} food={key} data={userFoodList["foods"][key]}></FridgeItem>);
            })
            setDisplayContent(displayFoods);
        } 
    }

    const toggleModal = () => {
        setModal(!modal);
      };
    
      if (modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    
    const toggleButton = () => {
        setState(!state)
    }

    async function logFood() {
        console.log(email);
        var food = document.getElementById("food-bar").value;
        var count = document.getElementById("count-bar").value;
        var date = document.getElementById("date-bar").value;
    
    
    
        let searchResults = await getFoodSearch(food);
        var topResult = searchResults.results[0];
        let foodData = [count, date];
    
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
          });
          setFoodSearch(true);
        }
    
      }
    

    useEffect(() => {
        console.log("Search");
        console.log(foodSearch);
        getFood(email);
        loadFood();
    }, [email, foodLoading, foodSearch, setFoodSearch])


    return (
        <div>
            <button onClick={toggleModal} className="fridge-btn-modal">
                Add Food +
            </button>

            {modal && (
                <div className="fridge-modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="fridge-modal-content">
                        <h2>Add Food to Fridge</h2>
                        <div className="search-ingredients">
                        <input id="food-bar" type="text" placeholder="Search ingredients..." />
                        <input id="count-bar" type="text" placeholder="Input in grams.." />
                        <input id="date-bar" type="text" placeholder="Input MM/DD/YYYY" />
                        </div>
                        <div className="add-food">
                        <button onClick={() => logFood()}>Add Food</button>
                        </div>
                        <button className="close-modal" onClick={toggleModal}>
                        x
                            </button>
                    </div>
                    </div>
            )}
             <div>{displayContent}</div>
        </div> 
    )
    */