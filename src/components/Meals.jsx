import { useEffect, useState } from "react";
import MealItem from "./MealItem";
export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [foodCart, setFoodCart] = useState({
    items: [],
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/meals");
      const resData = await response.json();
      setMeals(resData);
    }

    fetchData();
  }, []);

  function handleAddToCart(id) {
    setFoodCart((prev) => {
      const updatedItems = [...prev.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id == id
      );

      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };

        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = meals.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  return (
    <div id="meals">
      {console.log(foodCart.items)}
      {meals.map((item, index) => (
        <MealItem
          key={index}
          iIndex={item.id}
          itemName={item.name}
          itemPrice={item.price}
          itemDescription={item.description}
          itemImage={`http://localhost:3000/${item.image}`}
          onAdd={handleAddToCart}
        />
      ))}
    </div>
  );
}
