import { useSelector, useDispatch } from "react-redux";

import {
  addCartItem,
  removeCartItem,
  discardItem,
} from "../../store/cart/cart.action";

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
            addItemToCart={(item) => dispatch(addCartItem(cartItems, item))}
            removeItemFromCart={(item) =>
              dispatch(removeCartItem(cartItems, item))
            }
            discardItem={(item) => dispatch(discardItem(cartItems, item))}
          />
        );
      })}
      <Total>Total: ${total}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
