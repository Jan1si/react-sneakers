import React from 'react';
import { Card } from '../../components/Card';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import { useContext } from 'react';


export const Favorite = () => {

  const { favorite, onAddFavorite, onAddItemCart } = useContext(AppContext);

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
              onFavorite={(obj) => onAddFavorite(obj)}
              onPlus={(obj) => onAddItemCart(obj)}
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
