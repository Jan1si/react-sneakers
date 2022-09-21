import { Card } from "./components/Card";
import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "./components/Search";

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get("https://631f591e58a1c0fe9f6736c1.mockapi.io/items")
      .then(({ data }) => {
        setItems(data);
        setLoader(false);
      });

    axios.get("https://631f591e58a1c0fe9f6736c1.mockapi.io/cart")
      .then(({ data }) => {
        setCartItems(data);
      });
  }, []);

  const onAddItemCart = (obj, setLoad) => {
    setLoad(true);
    axios.post("https://631f591e58a1c0fe9f6736c1.mockapi.io/cart", obj)
    .then(() => {
      setCartItems(cartItems => [...cartItems, obj]);
      setLoad(false);
    });
    
  };

  const onDeleteItemCart = (id) => {
    console.log(id);
    axios.delete(`https://631f591e58a1c0fe9f6736c1.mockapi.io/cart/${id}`);
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      {cartOpened &&
        <Drawer
          cartItems={cartItems}
          onClose={() => setCartOpened(false)}
          onDelete={onDeleteItemCart}
        />
      }
      <Header onClickCart={() => setCartOpened(true)} />
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
          {/* {loadPost && <LoadSpiner />} */}
          {items
            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, idx) =>
              <Card
                key={idx}
                title={item.title}
                price={item.price}
                imgUrl={item.img}
                onFavorite={() => alert("Добавленно в закладки")}
                onPlus={(obj, setLoad) => onAddItemCart(obj, setLoad)}
              />
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
