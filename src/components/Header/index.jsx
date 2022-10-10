import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { AppContext } from '../../App';
import { useContext } from 'react';

export const Header = ({ onClickCart }) => {

  const { totalPrice } = useContext(AppContext);

  return (
    <header className="d-flex justify-between ">
      <Link to="/" style={{ "textDecoration": "none" }}>
        <div className={`${styles.header__logo} d-flex align-center`}>
          <img className={styles.logo__img} src="img/logo.png" alt="" />
          <div className={styles.logo__text}>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
      </Link>
      <ul className={`${styles.header__nav} clear d-flex align-center`}>
        <li onClick={onClickCart} className={`${styles.nav__item} d-flex mr-30 cu-p`}>
          <img width={18} height={18} className="mr-10" src="img/cart.svg" alt="" />
          <span>{totalPrice()} руб.</span>
        </li>
        <li className={`${styles.nav__item} d-flex mr-30 cu-p`}>
          <Link to="/favorite">
            <img width={18} height={18} className="mr-10" src="img/heart.svg" alt="" />
          </Link>
        </li>
        <li className={`${styles.nav__item} d-flex align-center cu-p`}>
          <Link to="/orders">
            <img width={18} height={18} src="img/user.svg" alt="" />
          </Link>
        </li>
      </ul>
    </header>
  )
}
