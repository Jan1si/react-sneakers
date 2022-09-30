import React from 'react'
import { Card } from "../../components/Card";
import { Search } from "../../components/Search";
import ContentLoader from "react-content-loader";


export const Main = (
  { items,
    searchValue,
    setSearchValue,
    loader,
    onAddItemCart,
    onAddFavorite }
) => {

  const renderItems = () => {
    const filterItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (loader ? [...Array(10)] : filterItems).map((item, idx) => (
      loader ? <ContentLoader
        speed={2}
        width={200}
        height={280}
        viewBox="0 0 200 280"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="135" rx="10" ry="10" width="200" height="25" />
        <rect x="0" y="23" rx="10" ry="10" width="200" height="100" />
        <rect x="0" y="165" rx="10" ry="10" width="200" height="25" />
        <rect x="0" y="204" rx="10" ry="10" width="100" height="30" />
        <rect x="166" y="200" rx="10" ry="10" width="32" height="32" />
      </ContentLoader>
        : <Card
          key={idx}
          {...item}
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
        {/* {loader && "Загрузка"} */}
        {renderItems()}

      </ul>
    </div>
  )
}
