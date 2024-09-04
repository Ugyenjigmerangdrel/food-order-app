import { useEffect, useState } from "react";
import MealItem from "./MealItem";
export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/meals");
      const resData = await response.json();
      console.log(resData);
      setMeals(resData);
    }

    fetchData();
  }, []);
  return (
    <div id="meals">
      {meals.map((item, index) => (
        <MealItem
          key={index}
          itemName={item.name}
          itemPrice={item.price}
          itemDescription={item.description}
          itemImage={`http://localhost:3000/${item.image}`}
        />
      ))}
    </div>
  );
}
