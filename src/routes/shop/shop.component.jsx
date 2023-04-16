import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addItemToCart={addItemToCart}
        />
      ))}
    </div>
  );
};

export default Shop;
