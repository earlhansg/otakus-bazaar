import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/product.model";

export interface CartItem extends Product {
  quantity: number;
  totalPrice: number;
}

type initialStateProp = {
  itemsList: CartItem[];
  totalQuantity: number;
  showCart: boolean;
};

const initialState: initialStateProp = {
  itemsList: [],
  totalQuantity: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.showCart = true;
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
      const { id, type } = action.payload;

      if (type === "remove") {
        state.itemsList = state.itemsList.filter((item) => item._id !== id);
        state.totalQuantity--;
      } else {
        const existingItem = state.itemsList.find((item) => item._id === id);
        if (existingItem) {
          if (existingItem.quantity === 1) {
            state.itemsList = state.itemsList.filter((item) => item._id !== id);
            state.totalQuantity--;
          } else {
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price;
          }
        }
      }
    },
    hideCart(state, action) {
      state.showCart = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
