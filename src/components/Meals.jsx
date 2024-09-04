import { useContext } from "react";
import { FoodCartContext } from "../context/food-cart-context";
import MealItem from "./MealItem";
export default function Meals() {
  const { items, meals, addItemToCart } = useContext(FoodCartContext);
  return (
    <div id="meals">
      {console.log(items)}
      {meals.map((item, index) => (
        <MealItem
          key={index}
          iIndex={item.id}
          itemName={item.name}
          itemPrice={item.price}
          itemDescription={item.description}
          itemImage={`http://localhost:3000/${item.image}`}
          onAdd={addItemToCart}
        />
      ))}
    </div>
  );
}
