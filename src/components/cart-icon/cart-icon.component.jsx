import { useSelector, useDispatch } from "react-redux";

import { selectCart } from "../../store/cart/cart.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { setIsCartOpen } from "../../store/cart/cart.action";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount,
} from "./cart-icon.styles";

const CardIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCart);

  const itemQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartIconContainer
      onClick={() => dispatch(setIsCartOpen(!isCartOpen))}
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
