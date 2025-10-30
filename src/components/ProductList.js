import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 45 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    width: "150px",
    textAlign: "center",
  },
};

export default ProductList;
