import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  CheckoutButton,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length === 0 ? (
          <EmptyMessage>No items selected, keep shopping!</EmptyMessage>
        ) : (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        )}
      </CartItems>
      <CheckoutButton onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </CheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
