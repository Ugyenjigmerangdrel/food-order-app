import { createContext, useState, useEffect } from "react";

export const FoodCartContext = createContext({
  items: [],
  meals: [],
  addItemToCart: () => {},
  updateQuantity: () => {},
});

export default function FoodCartContextProvider({ children }) {
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

  function handleUpdateQuantity(productId, amount) {
    setFoodCart((prev) => {
      const updatedItems = [...prev.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );
      const itemToBeUpdated = { ...updatedItems[updatedItemIndex] };

      itemToBeUpdated.quantity += amount;

      if (itemToBeUpdated.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = itemToBeUpdated;
      }

      return {
        items: updatedItems,
      };
    });
  }

  const ctxValue = {
    items: foodCart.items,
    meals: meals,
    addItemToCart: handleAddToCart,
    updateQuantity: handleUpdateQuantity,
  };

  return (
    <FoodCartContext.Provider value={ctxValue}>
      {children}
    </FoodCartContext.Provider>
  );
}
