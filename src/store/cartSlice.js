import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        
        itemInCart.productQuantity += action.payload.productQuantity;
      } else {
        state.cart.push({ ...action.payload });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.productQuantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
    },

    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.card = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
