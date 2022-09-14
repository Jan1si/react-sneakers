import React from 'react'
import styles from './Drawer.module.scss';

export const Drawer = ({ cartItems = [], onClose }) => {
  return (
    <div className={styles.owerlay}>
      <div className={styles.drawer}>
        <div className={styles.header__drawer}>
          <h2>Корзина</h2>
          <img onClick={onClose} className={styles.remove__btn} src="img/btn-remove.svg" alt="Close" />
        </div>
        <div className={styles.content__drawer}>
          {cartItems.map((item, key) => (
            <div className={styles.cart__item}>
            <div style={{ backgroundImage: `url(img/sneakers/${item.imgUrl})` }} className={styles.img__item}></div>
            <div className={styles.text__item}>
              <p>{item.title}</p>
              <b>{item.price} р. </b>
            </div>
            <img className={styles.remove__btn} src="img/btn-remove.svg" alt="Remove" />
          </div>
          ))}
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
