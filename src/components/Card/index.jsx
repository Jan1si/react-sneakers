import React from 'react'
import styles from './Card.module.scss';
import { useState } from 'react';
import { LoadSpiner } from '../LoadSpiner'


export const Card = ({title, price, imgUrl, onPlus, onFavorite }) => {

  const [isAdded, setIsAdded] = useState(false);
  const [loadPost, setLoadPost] = useState(false);

  const handleClick = () => {
    onPlus({title, price, imgUrl, loadPost }, setLoadPost);
    setIsAdded(!isAdded);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="img/unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} className={styles.card__img} src={`img/sneakers/${imgUrl}`} alt="" />
      <p className={`${styles.card__name} mt-15`}>{title}</p>
      <div className={`${styles.card__info} d-flex justify-between mt-15 align-center`}>
        <div className="card__price d-flex flex-column">
          <span>Цена: </span>
          <b>{price} р.</b>
        </div>
        {loadPost ? <LoadSpiner /> :
          (<img
            className={styles.plus}
            onClick={handleClick}
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
          )
        }
      </div>
    </div>
  )
}
