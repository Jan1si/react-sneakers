import React from 'react'
import styles from './Card.module.scss';
import { AppContext } from '../../App';
import { useContext } from 'react';


export const Card = (
  { id,
    title,
    price,
    imgUrl,
    onPlus,
    onFavorite, }) => {

  const { hasAddToCart, hasAddToFavorite } = useContext(AppContext);

  const handleClick = () => {
    onPlus({ id, title, price, imgUrl });
  }

  const clickFavorite = () => {
    onFavorite({ id, title, price, imgUrl });
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={clickFavorite}>
        <img src={hasAddToFavorite(id) ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" />
      </div>
      <img width={133} height={112} className={styles.card__img} src={`img/sneakers/${imgUrl}`} alt="" />
      <p className={`${styles.card__name} mt-15`}>{title}</p>
      <div className={`${styles.card__info} d-flex justify-between mt-15 align-center`}>
        <div className="card__price d-flex flex-column">
          <span>Цена: </span>
          <b>{price} р.</b>
        </div>
        <img
          className={styles.plus}
          onClick={handleClick}
          src={hasAddToCart(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
      </div>

    </div>
  )
}
