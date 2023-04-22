import { CartItemContainer, Img, ItemDetails, Name } from "./cart-item.styles";

const CartItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
