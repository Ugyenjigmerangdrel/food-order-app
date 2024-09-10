import { useContext } from "react";
import { FoodCartContext } from "../context/food-cart-context";
import useHttp from "../hooks/useHttps";
import MealItem from "./MealItem";

const requestConfig = {};

export default function Meals() {
  const { items, addItemToCart } = useContext(FoodCartContext);

  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals.....</p>;
  }

  return (
    <div id="meals">
      {/* {console.log(items)} */}
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
