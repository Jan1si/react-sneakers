import React from 'react'
import { Card } from "../../components/Card";
import { Search } from "../../components/Search";
import { AppContext } from '../../App';
import { useContext } from 'react';

export const Main = (
  { searchValue,
    setSearchValue,}) => {

  const {items, favorite, loader, onAddItemCart, onAddFavorite,} = useContext(AppContext);


  const renderItems = () => {
    const filterItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (loader ? [...Array(10)] : filterItems).map((item, idx) => (
       <Card
          key={idx}
          {...item}
          inFavorites={favorite.some((obj) => obj.id === item.id)}
          onFavorite={(obj) => onAddFavorite(obj)}
          onPlus={(obj) => onAddItemCart(obj)}
        />
    ));
  }

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
        {renderItems()}
      </ul>
    </div>
  )
}
