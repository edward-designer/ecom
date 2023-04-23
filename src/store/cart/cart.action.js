import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "./cart.types";

export const addCartItem = (cartItems, item) => {
  const newCartItems = addCartItemAction(cartItems, item);
  return createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, newCartItems);
};

export const removeCartItem = (cartItems, item) => {
  const newCartItems = removeCartItemAction(cartItems, item);
  return createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, newCartItems);
};

export const discardItem = (cartItems, item) => {
  const newCartItems = discardCartItemAction(cartItems, item);
  return createAction(CART_ACTION_TYPES.DISCARD_ITEM, newCartItems);
};

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool);

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
