import { createContext, useState } from "react";

const defaultState = {
  isCartOpen: false,
  setIsCartOpen: () => {},
};

export const CartContext = createContext(defaultState);

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
