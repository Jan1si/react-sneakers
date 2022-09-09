import React from 'react'
import styles from './Drawer.module.scss';

export const Drawer = ({onClose}) => {
  return (
    <div  className={styles.owerlay}>
      <div className={styles.drawer}>
        <div className={styles.header__drawer}>
          <h2>Корзина</h2>
          <img onClick={onClose} className={styles.remove__btn} src="img/btn-remove.svg" alt="Close" />
        </div>
        <div className={styles.content__drawer}>
          <div className={styles.cart__item}>
            <div style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }} className={styles.img__item}></div>
            <div className={styles.text__item}>
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 р. </b>
            </div>
            <img className={styles.remove__btn} src="img/btn-remove.svg" alt="Remove" />
          </div>

          <div className={styles.cart__item}>
            <div style={{ backgroundImage: 'url(img/sneakers/2.jpg)' }} className={styles.img__item}></div>
            <div className={styles.text__item}>
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 р. </b>
            </div>
            <img className={styles.remove__btn} src="img/btn-remove.svg" alt="Remove" />
          </div>

          <div className={styles.cart__item}>
            <div style={{ backgroundImage: 'url(img/sneakers/3.jpg)' }} className={styles.img__item}></div>
            <div className={styles.text__item}>
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 р. </b>
            </div>
            <img className={styles.remove__btn} src="img/btn-remove.svg" alt="Remove" />
          </div>

          <div className={styles.cart__item}>
            <div style={{ backgroundImage: 'url(img/sneakers/4.jpg)' }} className={styles.img__item}></div>
            <div className={styles.text__item}>
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 р. </b>
            </div>
            <img className={styles.emove__btn} src="img/btn-remove.svg" alt="Remove" />
          </div>

          <div className={styles.cart__item}>
            <div style={{ backgroundImage: 'url(img/sneakers/5.jpg)' }} className={styles.img__item}></div>
            <div className={styles.text__item}>
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 р. </b>
            </div>
            <img className={styles.remove__btn} src="img/btn-remove.svg" alt="Remove" />
          </div>
          <div className={styles.cart__item}>
            <div style={{ backgroundImage: 'url(img/sneakers/6.jpg)' }} className={styles.img__item}></div>
            <div className={styles.text__item}>
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 р. </b>
            </div>
            <img className={styles.remove__btn} src="img/btn-remove.svg" alt="Remove" />
          </div>
        </div>

        <div className={styles.footer__drawer}>
          <ul className={styles.total__block}>
            <li className="d-flex">
              <span>Итого:</span>
              <div className={styles.dash}></div>
              <b>21 498 р.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div className={styles.dash}></div>
              <b>498 р.</b>
            </li>
          </ul>
          <button className={styles.green__btn}>Оформить заказ <img src="img/arrow.svg" alt="Arrow" /></button>
        </div>

      </div>
    </div>
  )
}
