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
        setFavorite(data.filter(item => item.favorite === true));
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

  const onAddFavorite = async ({ id, title, price, imgUrl, favorite }) => {
    try {
      const article = {
        id: id,
        title: title,
        price: price,
        img: imgUrl,
        favorite: !favorite
      };
      const {status} = await axios.put(`http://localhost:3001/product/${id}`, article);
      setFavorite((favorite) => [...favorite, favorite.filter(item => item.favorite === true)]);
      console.log(status);
    } catch (error) {
      alert("Неудалось добавить товар в закладки!");
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
