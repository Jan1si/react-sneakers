import React from 'react'
import styles from './Header.module.scss';

export const Header = ({onClickCart}) => {
  return (
    <header className="d-flex justify-between ">
      <div className={`${styles.header__logo} d-flex align-center`}>
        <img className={styles.logo__img} src="img/logo.png" alt="" />
        <div className={styles.logo__text}>
          <h3>React Sleakers</h3>
          <p>Магазин лучших кросовок</p>
        </div>
      </div>
      <ul className={`${styles.header__nav} clear d-flex align-center`}>
        <li onClick={onClickCart} className={`${styles.nav__item} d-flex mr-30 cu-p`}>
          <img width={18} height={18} className="mr-10" src="img/cart.svg" alt="" />
          <span>1000 руб.</span>
        </li>
        <li className={`${styles.nav__item} d-flex align-center cu-p`}>
          <img width={18} height={18} src="img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  )
}
