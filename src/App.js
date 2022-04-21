import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [show, setShow] = useState(false);

  const Showing = () => {
    setShow(true);
  };

  const ShowingOff = () => {
    setShow(false);
  } 

  return (
    <CartProvider>
      {show && <Cart showOff={ShowingOff}/>}
      <Header show={Showing}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
