// import { createStore } from "@reduxjs/toolkit";

// export const reducer = (state = initialState, action) => {
//   console.log("store")
// }


// export const store = createStore(reducer);

import { DELETE_FROM_CART, ADD_IN_CART } from "../variables";
import { configureStore } from "@reduxjs/toolkit";

// STATE
localStorage.setItem("cart", "[]")
const initialState = JSON.parse(localStorage.getItem("cart"));
console.log(initialState);  


const Article = class {
  constructor(id, quantity, price) {
    this.id = id;
    this.quantity = quantity;
    this.price = price;
  }
}

// Action 

export const addInCart = () => {
  
}

export const deleteFromCart = () => {

}



export default configureStore({
  reducer: {},
});