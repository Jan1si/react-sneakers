import React from 'react'
import styles from './Card.module.scss';
import { AppContext } from '../../App';
import { useContext } from 'react';
import ContentLoader from "react-content-loader";

export const Card = (
  { id,
    title,
    price,
    imgUrl,
    onPlus,
    onFavorite, }) => {

  const { loader, hasAddToCart, hasAddToFavorite } = useContext(AppContext);

  const handleClick = () => {
    onPlus({ id, title, price, imgUrl });
  }

  const clickFavorite = () => {
    onFavorite({ id, title, price, imgUrl });
  }

  return (
    !loader ?
      <div className={styles.card}>
        {onFavorite && <div className={styles.favorite} onClick={clickFavorite}>
          <img src={hasAddToFavorite(id) ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" />
        </div>}
        <img width={133} height={112} className={styles.card__img} src={`img/sneakers/${imgUrl}`} alt="" />
        <p className={`${styles.card__name} mt-15`}>{title}</p>
        <div className={`${styles.card__info} d-flex justify-between mt-15 align-center`}>
          <div className="card__price d-flex flex-column">
            <span>Цена: </span>
            <b>{price} р.</b>
          </div>
          {onPlus && <img
            className={styles.plus}
            onClick={handleClick}
            src={hasAddToCart(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
          }
        </div>
      </div>
      :
      <div className={styles.card}>
        <ContentLoader
          speed={2}
          width={200}
          height={270}
          viewBox="0 0 200 280"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="185" rx="10" ry="10" width="160" height="20" />
          <rect x="0" y="23" rx="10" ry="10" width="160" height="150" />
          <rect x="0" y="215" rx="10" ry="10" width="160" height="20" />
          <rect x="0" y="250" rx="10" ry="10" width="80" height="30" />
          <rect x="125" y="248" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      </div>
  )
}

