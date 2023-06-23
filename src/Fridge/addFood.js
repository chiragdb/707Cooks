import React, { useState } from "react";
import "./addFood.css"

export default function FoodModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    // if (modal) {
    //     document.body.classList.add('active-modal')
    // } else {
    //     document.body.classList.remove('active-modal')
    // }

    const [state, setState] = useState(false)
    const toggleButton = ()=>{
        setState(!state)
    }

    return (
        <>
          <button onClick={toggleModal} className="fridge-btn-modal">
            Add Food +
          </button>
    
          {modal && (
            <div className="fridge-modal">
              <div onClick={toggleModal} className="fridge-overlay"></div>
              <div className="fridge-modal-content">
                <h2>Add Food to Fridge</h2>
                <div className = "search-ingredients">
                    <input type = "text" placeholder="Search ingredients..."/>
                </div>
                <div className = "add-food">
                    <button>Add Food</button>
                </div>
                <button className="close-modal" onClick={toggleModal}>
                  x
                </button>
              </div>
            </div>
          )}
        </>
      );
}