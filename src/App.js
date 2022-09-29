import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import { Main } from "./pages/Main";
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import axios from "axios";
import { Favorite } from "./pages/Favorite";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/product")
      .then(({ data }) => {
        setItems(data);
        setLoader(false);
      });

    axios.get("http://localhost:3001/favorite")
      .then(({ data}) => {
        setFavorite(data);
      });

    axios.get("http://localhost:3001/cart")
      .then(({ data }) => {
        setCartItems(data);
      });

  }, []);

  const onAddItemCart = async (obj) => {
    try {
      const {data} = await axios.post("http://localhost:3001/cart", obj);
      setCartItems((cartItems) => [...cartItems, data]);
    } catch (error) {
      alert("Произошла ошибка, не удалось добавить продукт в корзину!");
    }
  };

  const onAddFavorite = async (obj) => {
    if (favorite.find((favObj) => favObj.id === obj.id)) {
      try {
        const { status } = await axios.delete(`http://localhost:3001/favorite/${obj.id}`);
        setFavorite((favorite) => favorite.filter((item) => item.id !== obj.id));
        console.log(`Товар удалён из закладок! Ответ:${status}`);
      } catch (error) {
        alert(`Произошла ошибка, неудалось удалить товар из закладок! Ответ:${error}`);
      }
    } else {
      try {
        const { data, status } = await axios.post("http://localhost:3001/favorite", obj);
        setFavorite((favorite) => [...favorite, data]);
        console.log(`Товар добавлен в закладки! Ответ:${status}`);
      } catch (error) {
        alert(`Произошла ошибка, неудалось добавить товар в закладки! Ответ:${error}`);
      }
    }
  }

  const onDeleteItemCart =  async (id) => {
    try {
      const {status} = await axios.delete(`http://localhost:3001/cart/${id}`);
      setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
      console.log(status);
    } catch (error) {
      alert("Неудалость удалить товар из корзины!")
    }
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
      <Routes>
        <Route exact path="/" element={
          <Main
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            loader={loader}
            onAddFavorite={onAddFavorite}
            onAddItemCart={onAddItemCart}
          />
        }
        />
        <Route path="/favorite" element={
          <Favorite
            inFavorite={true}
            favorite={favorite}
            onAddFavorite={onAddFavorite}
            onAddItemCart={onAddItemCart}
          />
        }
        />
      </Routes>
    </div>
  );
}

export default App;
