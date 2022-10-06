import React from 'react'
import styles from './Card.module.scss';
import { AppContext } from '../../App';
import { useContext } from 'react';


export const Card = ({ id, title, price, imgUrl, onPlus, onFavorite, inFavorite }) => {

  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    onPlus({ id, title, price, imgUrl });
    setIsAdded(!isAdded);
  }

  const clickFavorite = () => {
    onFavorite({ id, title, price, imgUrl });
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={clickFavorite}>
<<<<<<< HEAD
        <img src={`${isFavorite ? "/img/liked.svg" :"/img/unliked.svg"}`} alt="Unliked" />
=======
        <img src={hasAddToFavorite(id) ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" />
>>>>>>> 82654b21c9943168c6a6db63a242ef3e3914a0db
      </div>
      <img width={133} height={112} className={styles.card__img} src={`img/sneakers/${imgUrl}`} alt="" />
      <p className={`${styles.card__name} mt-15`}>{title}</p>
      <div className={`${styles.card__info} d-flex justify-between mt-15 align-center`}>
        <div className="card__price d-flex flex-column">
          <span>Цена: </span>
          <b>{price} р.</b>
        </div>
<<<<<<< HEAD
        {loadPost ? <LoadSpiner /> :
          (<img
            className={styles.plus}
            onClick={handleClick}
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
          )
        }
=======
        <img
          className={styles.plus}
          onClick={handleClick}
          src={hasAddToCart(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
>>>>>>> 82654b21c9943168c6a6db63a242ef3e3914a0db
      </div>
    </div>
  )
}
