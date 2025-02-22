import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.name !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.name === action.payload);
      if (item) {
        ++item.quantity;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.name === action.payload);
      if (item) {
        --item.quantity;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

// exporting selectors function.

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityByName = (name) => (state) =>
  state.cart.cart.find((item) => item.name === name)?.quantity ?? 0;
//Yes! Selectors are called with the latest
// Redux state whenever a component using them re-renders
//  due to a state update.
