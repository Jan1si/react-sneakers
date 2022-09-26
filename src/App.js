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
    axios.get("https://631f591e58a1c0fe9f6736c1.mockapi.io/items")
      .then(({ data }) => {
        setItems(data);
        setLoader(false);
        setFavorite(data.filter(item => item.favorite === true));
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
        setCartItems((cartItems) => [...cartItems, obj]);
        setLoad(false);
        axios.get("https://631f591e58a1c0fe9f6736c1.mockapi.io/cart")
          .then(({ data }) => {
            setCartItems(data);
          });
      });

  };

  const onAddFavorite = ({ id, favorite }, setLoad) => {
    setLoad(true);
    const article = { favorite: !favorite }
    axios.put(`https://631f591e58a1c0fe9f6736c1.mockapi.io/items/${id}`, article)
      .then(() => {
        setLoad(false);
        axios.get("https://631f591e58a1c0fe9f6736c1.mockapi.io/items")
          .then(({ data }) => {
            setItems(data);
            setFavorite(data.filter(item => item.favorite === true));
          });
      })
  }

  const onDeleteItemCart = (id) => {
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
