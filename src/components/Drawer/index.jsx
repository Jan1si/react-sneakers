import React from 'react'
import styles from './Drawer.module.scss';
import { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { Info } from '../Info';

export const Drawer = ({opened, onClose, onDelete }) => {
  const { cartItems, orderId, onAddToOrder, totalPrice } = useContext(AppContext);
  const [orders, setOrders] = useState(false);

  const sendCartItems = (obj) => {
    setOrders(true);
    onAddToOrder(obj);
  }


  return (
    <div className={` ${styles.owerlay} ${opened ? styles.owerlay__active: ''}`}>
      <div className={`${styles.drawer} ${opened ? styles.drawer__active: ''}`}>
        <div className={styles.header__drawer}>
          <h2>Корзина</h2>
          <img onClick={onClose} className={styles.remove__btn} src="img/btn-remove.svg" alt="Close" />
        </div>
        <div className={styles.content__drawer}>

          {cartItems.length > 0 ? (
            cartItems.map((item, key) => (
              <div key={key} className={styles.cart__item}>
                <div style={{ backgroundImage: `url(img/sneakers/${item.imgUrl})` }} className={styles.img__item}></div>
                <div className={styles.text__item}>
                  <p>{item.title}</p>
                  <b>{item.price} р. </b>
                </div>
                <img onClick={() => onDelete(item.id)} className={styles.remove__btn} src="img/btn-remove.svg" alt="Remove" />
              </div>
            ))
          )
            : (
              orders ? 
              <Info
              key={"order"}
              img={"img/complete-order.jpg"}
              title={`Заказ №${orderId} оформлен`}
              description={"что-то"}
              onClose={onClose}  
            />
              :
              <Info
                key={"empty"}
                img={"img/empty-cart.jpg"}
                title={"Корзина пустая"}
                description={"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                onClose={onClose}  
              />
            )
          }
        </div>
        {cartItems.length > 0 ? (
          <div className={styles.footer__drawer}>
            <ul className={styles.total__block}>
              <li className="d-flex">
                <span>Итого:</span>
                <div className={styles.dash}></div>
                <b>{totalPrice()} р.</b>
              </li>
              <li className="d-flex">
                <span>Налог 5%:</span>
                <div className={styles.dash}></div>
                <b>{Math.round(totalPrice() * 0.05)} р.</b>
              </li>
            </ul>
            <button onClick={() => sendCartItems(cartItems)} className={`green__btn ${styles.buy__btn}`}>Оформить заказ <img src="img/arrow.svg" alt="Arrow" /></button>
          </div>
        )
          : null
        }


      </div>
    </div>
  )
}
