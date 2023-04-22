import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount,
} from "./cart-icon.styles";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const itemQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartIconContainer
      onClick={() => setIsCartOpen(!isCartOpen)}
      tabIndex="0"
      role="button"
      aria-pressed={isCartOpen}
    >
      <ShoppingIconContainer />
      <ItemCount>{itemQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
