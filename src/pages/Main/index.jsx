import React from 'react'
import { Card } from "../../components/Card";
import { Search } from "../../components/Search";
import ContentLoader from "react-content-loader";
import { AppContext } from '../../App';
import { useContext } from 'react';
import styles from '../../components/Card/Card.module.scss';

export const Main = (
  { searchValue,
    setSearchValue,
    loader,}) => {

  const {items, favorite,  onAddItemCart, onAddFavorite,} = useContext(AppContext);


  const renderItems = () => {
    const filterItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (loader ? [...Array(10)] : filterItems).map((item, idx) => (
      loader ? <div className={styles.card} key={idx}>
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
        : <Card
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
