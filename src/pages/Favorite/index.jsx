import React from 'react';
import { Card } from '../../components/Card';

export const Favorite = ({favorite, onAddItemCart, onAddFavorite}) => {
  return (
    <div className="content">
        <div className="header__content">
            <h2>Мои закладки</h2>
        </div>
        <ul className="list__product mt-40 d-flex">
          {favorite.map((item, idx) => 
            <Card
                key={idx}
                id={item.id}
                title={item.title}
                price={item.price}
                imgUrl={item.img}
                favorite={item.favorite}
                onFavorite={(obj, setLoad) => onAddFavorite(obj, setLoad)}
                onPlus={(obj, setLoad) => onAddItemCart(obj, setLoad)}
              />
          )}
        </ul>
      </div>
  )
}
