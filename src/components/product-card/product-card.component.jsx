import { useSelector, useDispatch } from "react-redux";

import { selectCart } from "../../store/cart/cart.selector";
import { addCartItem } from "../../store/cart/cart.action";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  Price,
  ProductCardContainer,
  Footer,
  Name,
  Img,
  ProductButton,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addCartItem(cartItems, product));

  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <ProductButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </ProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
