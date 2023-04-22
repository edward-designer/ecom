import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
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

const removeCartItem = (cartItems, productToRemove) => {
  const result = [];
  cartItems.forEach((cartItem) => {
    if (cartItem.id !== productToRemove.id) result.push(cartItem);
    else if (cartItem.quantity > 1)
      result.push({ ...cartItem, quantity: cartItem.quantity - 1 });
  });
  return result;
};


const CART_ACTION_TYPE = {
  SET_CART_OPEN: "SET_CART_OPEN",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  DISCARD_ITEM: "DISCARD_ITEM",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPE.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPE.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, payload),
      };
    case CART_ACTION_TYPE.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, payload),
      };
    case CART_ACTION_TYPE.DISCARD_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      };
    default:
      throw new Error(`Invalid action type: ${type}`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};


const defaultState = {
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  discardItem: () => {},
};

export const CartContext = createContext(defaultState);

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems } = state;

  const setIsCartOpen = (isOpen) => {
    dispatch({ type: CART_ACTION_TYPE.SET_CART_OPEN, payload: isOpen });
  };

  const addItemToCart = (productToAdd) => {
    dispatch({
      type: CART_ACTION_TYPE.ADD_ITEM_TO_CART,
      payload: productToAdd,
    });
  };

  const removeItemFromCart = (productToRemove) => {
    dispatch({
      type: CART_ACTION_TYPE.REMOVE_ITEM_FROM_CART,
      payload: productToRemove,
    });
  };

  const discardItem = (productToRemove) => {
    dispatch({
      type: CART_ACTION_TYPE.DISCARD_ITEM,
      payload: productToRemove,
    });
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        discardItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
