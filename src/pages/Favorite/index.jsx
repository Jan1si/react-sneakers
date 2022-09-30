import React from 'react';
import { Card } from '../../components/Card';
import { Link } from 'react-router-dom';

export const Favorite = ({inFavorite, favorite, onAddItemCart, onAddFavorite }) => {
  return (
    <div className="content">

      {favorite.length > 0 ? (
        <div className="header__content">
          <h2>Мои закладки</h2>
        </div>
      ) : null}

      <ul className="list__product mt-40 d-flex">
        {favorite.length > 0 ? (
          favorite.map((item, idx) =>
            <Card
              key={idx}
              {...item}
              inFavorite={inFavorite}
              onFavorite={(obj, setLoad) => onAddFavorite(obj, setLoad)}
              onPlus={(obj, setLoad) => onAddItemCart(obj, setLoad)}
            />
          )
        ) : (
          <div className="empty__favorite">
            <img width={70} height={70} src="img/empty-favorite.png" alt="" />
            <h1>Закладок нет :(</h1>
            <p>Вы ничего не добавляли в закладки</p>
            <Link to="/" >
              <button className="green__btn empty__btn"><img src="img/arrow.svg" alt="Arrow" />Вернуться назад</button>
            </Link>
          </div>
        )}

      </ul>
    </div>
  )
}
