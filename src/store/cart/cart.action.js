import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "./cart.types";

export const addCartItem = (item) =>
  createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, item);

export const removeCartItem = (item) =>
  createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, item);

export const discardItem = (item) =>
  createAction(CART_ACTION_TYPES.DISCARD_ITEM, item);

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool);
