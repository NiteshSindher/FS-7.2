import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} style={styles.item}>
            <span>
              {item.name} (${item.price})
            </span>
            <input
              type="number"
              value={item.quantity}
              min="1"
              style={{ width: "50px", margin: "0 10px" }}
              onChange={(e) =>
                dispatch(
                  updateQuantity({ id: item.id, quantity: Number(e.target.value) })
                )
              }
            />
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  },
};

export default Cart;
