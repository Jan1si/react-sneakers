import React from 'react'
import { Card } from "../Card";
import { Search } from "../Search";

export const Main = ({items, loader, searchValue, setSearchValue, onAddItemCart, onAddFavorite}) => {
  return (
    <div className="content">
        <div className="header__content">
          {
            searchValue ?
              <h2>Поиск по запросу: "{searchValue}"</h2>
              : <h1>Все кроссовки</h1>
          }
          <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <ul className="list__product mt-40 d-flex">
          {loader && "Загрузка"}
          {items
            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, idx) =>
              <Card
                key={idx}
                title={item.title}
                price={item.price}
                imgUrl={item.img}
                onFavorite={(obj) => onAddFavorite(obj)}
                onPlus={(obj, setLoad) => onAddItemCart(obj, setLoad)}
              />
            )}
        </ul>
      </div>
  )
}
