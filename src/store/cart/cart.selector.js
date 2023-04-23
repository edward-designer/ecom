import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCart = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartTotal = createSelector([selectCart], (cartItems) =>
  cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
);
