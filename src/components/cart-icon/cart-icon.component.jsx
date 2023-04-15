import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen(!isCartOpen)}
      tabindex="0"
      role="button"
      aria-pressed={isCartOpen}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
