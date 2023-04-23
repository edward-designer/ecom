import { useDispatch } from "react-redux";

import { addCartItem } from "../../store/cart/cart.slice";

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

  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addCartItem(product));

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
