import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

const addCartItemAction = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItemAction = (cartItems, productToRemove) => {
  const result = [];
  cartItems.forEach((cartItem) => {
    if (cartItem.id !== productToRemove.id) result.push(cartItem);
    else if (cartItem.quantity > 1)
      result.push({ ...cartItem, quantity: cartItem.quantity - 1 });
  });
  return result;
};

const discardCartItemAction = (cartItems, productToDiscard) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDiscard.id);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addCartItem(state, action) {
      state.cartItems = addCartItemAction(state.cartItems, action.payload);
    },
    removeCartItem(state, action) {
      state.cartItems = removeCartItemAction(state.cartItems, action.payload);
    },
    discardCartItem(state, action) {
      state.cartItems = discardCartItemAction(state.cartItems, action.payload);
    },
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
  },
});

export const { addCartItem, removeCartItem, discardCartItem, setIsCartOpen } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
