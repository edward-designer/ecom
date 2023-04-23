import { useSelector, useDispatch } from "react-redux";

import {
  addCartItem,
  removeCartItem,
  discardCartItem,
} from "../../store/cart/cart.slice";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import { selectCart, selectCartTotal } from "../../store/cart/cart.selector";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart);
  const total = useSelector(selectCartTotal);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Unit Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        const { id } = cartItem;
        return (
          <CheckoutItem
            key={id}
            cartItem={cartItem}
            addItemToCart={(item) => dispatch(addCartItem(item))}
            removeItemFromCart={(item) => dispatch(removeCartItem(item))}
            discardItem={(item) => dispatch(discardCartItem(item))}
          />
        );
      })}
      <Total>Total: ${total}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
