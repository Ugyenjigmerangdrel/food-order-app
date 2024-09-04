import { useContext } from "react";
import { FoodCartContext } from "../context/food-cart-context";
export default function Cart() {
  const { items, updateQuantity } = useContext(FoodCartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const formattedPrice = totalPrice.toFixed(2);

  return (
    <div className="cart">
      {items.length == 0 && <h2>No items in the Cart!</h2>}
      <ul>
        {items.map((item, index) => (
          <li key={index} className="cart-item">
            <p>
              {item.name} - {item.quantity} x ${item.price}
            </p>
            <div className="cart-item-actions">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => updateQuantity(item.id, +1)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <h2 className="cart-total">${formattedPrice}</h2>
      <div className="cart-item-actions"></div>
    </div>
  );
}
