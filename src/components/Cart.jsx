import { useContext } from "react";
import { FoodCartContext } from "../context/food-cart-context";
export default function Cart() {
  const { items } = useContext(FoodCartContext);

  return (
    <div className="cart">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="cart-item">
            <p>{item.name}</p>
            <div className="cart-item-actions">
              <button>-</button>
              <p>{item.quantity}</p>
              <button>+</button>
            </div>
          </li>
        ))}
      </ul>
      <h2 className="cart-total">$45.99</h2>
      <div className="cart-item-actions"></div>
    </div>
  );
}
