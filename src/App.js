import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);

  const displayCartHander = () => {
    setCartDisplay(true);
  }

  const hideCartHander = () => {
    setCartDisplay(false);
  }

  return (
    <CartProvider>
      {cartDisplay && <Cart onClose={hideCartHander}/>}
      <Header onDisplayCart={displayCartHander}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
