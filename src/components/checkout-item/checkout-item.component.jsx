import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  Name,
  Quantity,
  Price,
  RemoveButton,
  Button,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({
  cartItem,
  addItemToCart,
  removeItemFromCart,
  discardItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Button onClick={() => removeItemFromCart(cartItem)}>-</Button>
        {quantity}
        <Button onClick={() => addItemToCart(cartItem)}>+</Button>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton>
        <Button onClick={() => discardItem(cartItem)}>&#10005;</Button>
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
