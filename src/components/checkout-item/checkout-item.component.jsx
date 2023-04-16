import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  addItemToCart,
  removeItemFromCart,
  discardItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button onClick={() => removeItemFromCart(cartItem)}>-</button>
        {quantity}
        <button onClick={() => addItemToCart(cartItem)}>+</button>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button">
        <button onClick={() => discardItem(cartItem)}>&#10005;</button>
      </div>
    </div>
  );
};

export default CheckoutItem;
