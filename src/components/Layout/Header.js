import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpeg';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Yummy Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="delicious food"/>
      </div>
    </Fragment>
  )
}

export default Header;