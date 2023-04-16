import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart, discardItem } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Unit Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const { id } = cartItem;
        return (
          <CheckoutItem
            key={id}
            cartItem={cartItem}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
            discardItem={discardItem}
          />
        );
      })}
      <span className="total">Total: ${total}</span>
    </div>
  );
};

export default Checkout;
