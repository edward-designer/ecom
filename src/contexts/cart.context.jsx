import { createContext, useState } from "react";

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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const discardItem = (productToRemove) => {
    setCartItems(
      cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
    );
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
