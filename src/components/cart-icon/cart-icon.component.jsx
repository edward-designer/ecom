import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const itemQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen(!isCartOpen)}
      tabIndex="0"
      role="button"
      aria-pressed={isCartOpen}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemQuantity}</span>
    </div>
  );
};

export default CardIcon;
