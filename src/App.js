import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);

  const displayCartHander = () => {
    setCartDisplay(true);
  }

  const hideCartHander = () => {
    setCartDisplay(false);
  }

  return (
    <Fragment>
      {cartDisplay && <Cart onClose={hideCartHander}/>}
      <Header onDisplayCart={displayCartHander}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
