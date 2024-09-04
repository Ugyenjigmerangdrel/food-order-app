import Header from "./components/Header";
import Meals from "./components/Meals";
import FoodCartContextProvider from "./context/food-cart-context";
function App() {
  return (
    <FoodCartContextProvider>
      <Header />
      <Meals></Meals>
    </FoodCartContextProvider>
  );
}

export default App;
