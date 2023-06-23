import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/product.model";

interface CartItem extends Product {
  quantity: number;
  totalPrice: number;
}

type initialStateProp = {
  itemsList: CartItem[];
  totalQuantity: number;
};

const initialState: initialStateProp = {
  itemsList: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem: CartItem = action.payload;
      // to check if item is already available
      const existingItem = state.itemsList.find(
        (item) => item._id === newItem._id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          _id: newItem._id,
          name: newItem.name,
          ratings: newItem.ratings,
          reviews: newItem.reviews,
          price: newItem.price,
          status: newItem.status,
          imagePath: newItem.imagePath,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item._id === id);
      if (existingItem) {
        if (existingItem?.quantity === 1) {
          state.itemsList = state.itemsList.filter((item) => item._id !== id);
          state.totalQuantity--;
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
