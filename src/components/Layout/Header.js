import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpeg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Yummy Meals</h1>
        <HeaderCartButton onClick={props.onDisplayCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="delicious food"/>
      </div>
    </Fragment>
  )
}

export default Header;