import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css"


const HeaderCartButton = (props) => {
  const [highlightedBtn, setHiglightedBtn] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items }  = cartCtx;
  const numberOfCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);
  
  const btnStyles = `${styles.button} ${highlightedBtn ? styles.bump: ''}`; 
  useEffect(() => {
    if(items.length === 0) {
      return;
    }
    setHiglightedBtn(true);

    const timer = setTimeout(()=> {setHiglightedBtn(false)}, 300);

    return () => {
      clearTimeout(timer);
    }
  },[items])

  return(
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>

    </button>
  )
}

export default HeaderCartButton;