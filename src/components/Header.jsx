import React from 'react'

export const Header = () => {
  return (
    <header className="d-flex justify-between ">
        <div className="header__logo d-flex align-center">
          <img className="logo__img" src="img/logo.png" alt="" />
          <div className="logo__text">
            <h3>React Sleakers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="header__nav clear d-flex align-center">
          <li className="nav__item d-flex mr-30">
            <img width={18} height={18} className="mr-10" src="img/cart.svg" alt="" />
            <span>1000 руб.</span>
          </li>
          <li className="nav__item d-flex align-center">
            <img width={18} height={18} src="img/user.svg" alt="" />
          </li>
        </ul>
      </header>
  )
}
