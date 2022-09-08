import React from 'react'

export const Drawer = () => {
  return (
    <div style={{ display: "none" }} className="owerlay">
        <div className="drawer">
          <div className="header__drawer">
            <h2>Корзина</h2>
            <img className="remove__btn" src="img/btn-remove.svg" alt="Close" />
          </div>
          <div className="content__drawer">
            <div className="cart__item">
              <div style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }} className="img__item"></div>
              <div className="text__item">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 р. </b>
              </div>
              <img className="remove__btn" src="img/btn-remove.svg" alt="Remove" />
            </div>

            <div className="cart__item">
              <div style={{ backgroundImage: 'url(img/sneakers/2.jpg)' }} className="img__item"></div>
              <div className="text__item">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 р. </b>
              </div>
              <img className="remove__btn" src="img/btn-remove.svg" alt="Remove" />
            </div>

            <div className="cart__item">
              <div style={{ backgroundImage: 'url(img/sneakers/3.jpg)' }} className="img__item"></div>
              <div className="text__item">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 р. </b>
              </div>
              <img className="remove__btn" src="img/btn-remove.svg" alt="Remove" />
            </div>

            <div className="cart__item">
              <div style={{ backgroundImage: 'url(img/sneakers/4.jpg)' }} className="img__item"></div>
              <div className="text__item">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 р. </b>
              </div>
              <img className="remove__btn" src="img/btn-remove.svg" alt="Remove" />
            </div>

            <div className="cart__item">
              <div style={{ backgroundImage: 'url(img/sneakers/5.jpg)' }} className="img__item"></div>
              <div className="text__item">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 р. </b>
              </div>
              <img className="remove__btn" src="img/btn-remove.svg" alt="Remove" />
            </div>
            <div className="cart__item">
              <div style={{ backgroundImage: 'url(img/sneakers/6.jpg)' }} className="img__item"></div>
              <div className="text__item">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 р. </b>
              </div>
              <img className="remove__btn" src="img/btn-remove.svg" alt="Remove" />
            </div>
          </div>

          <div className="footer__drawer">
            <ul className="total__block">
              <li className="d-flex">
                <span>Итого:</span>
                <div className="dash"></div>
                <b>21 498 р.</b>
              </li>
              <li className="d-flex">
                <span>Налог 5%:</span>
                <div className="dash"></div>
                <b>498 р.</b>
              </li>
            </ul>
            <button className="green__btn">Оформить заказ <img src="img/arrow.svg" alt="Arrow" /></button>
          </div>

        </div>
      </div>
  )
}
