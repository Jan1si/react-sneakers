import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import { Main } from "./pages/Main";
import { Favorite } from "./pages/Favorite";
import { Orders } from "./pages/Orders";
import { useState, useEffect, createContext } from "react";
import { Routes, Route } from 'react-router-dom';
import axios from "axios";



export const AppContext = createContext({});

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [loader, setLoader] = useState(true);
  const [orderId, setOrderId] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoader(true);
        const { data: productData } = await axios.get("http://localhost:3001/product")
        const { data: favoriteData } = await axios.get("http://localhost:3001/favorite")
        const { data: cartData } = await axios.get("http://localhost:3001/cart")
        setLoader(false);
        setCartItems(cartData);
        setFavorite(favoriteData);
        setItems(productData);
      } catch (error) {
        alert("Не удалось получить данные с сервера!")
      }

    }
    fetchData();
  }, []);

  const onAddItemCart = async (obj) => {
    if (cartItems.find((cartObj) => cartObj.id === obj.id)) {
      try {
        const { status } = await axios.delete(`http://localhost:3001/cart/${obj.id}`);
        setCartItems((cartItems) => cartItems.filter((item) => item.id !== obj.id));
        console.log(status);
      } catch (error) {
        alert("Произошла ошибка, не удалось удалить продукт из корзины!");
      }
    } else {
      try {
        const { data, status } = await axios.post("http://localhost:3001/cart", obj);
        setCartItems((cartItems) => [...cartItems, data]);
        console.log(status);
      } catch (error) {
        alert("Произошла ошибка, не удалось добавить продукт в корзину!");
      }
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

  const onDeleteItemCart = async (id) => {
    try {
      const { status } = await axios.delete(`http://localhost:3001/cart/${id}`);
      setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
      console.log(status);
    } catch (error) {
      alert("Неудалость удалить товар из корзины!")
    }
  };

  const onAddToOrder = async (obj) => {
    try {
      const date = new Date();
      const { data } = await axios.post("http://localhost:3001/orders", {
        items: {
          obj,
          date
        },
      });
      
      for (let item of obj) {
        await axios.delete(`http://localhost:3001/cart/${item.id}`);
      }
      setOrderId(data.id);
      setCartItems([]);
    } catch (error) {
      alert(error);
      console.log(cartItems);
    }
  }

  const hasAddToCart = (id) => {
    return (cartItems.some((obj) => obj.id === id));
  }

  const hasAddToFavorite = (id) => {
    return (favorite.some((obj) => obj.id === id));
  }

  const totalPrice  = () => {
    return cartItems.reduce((sum, obj) => Number(obj.price.replace( /\s/g, "")) + Number(sum), 0);
  }

  return (
    <AppContext.Provider value={
      {
        items,
        cartItems,
        favorite,
        orderId,
        loader,
        onAddItemCart,
        onAddFavorite,
        onAddToOrder,
        hasAddToCart,
        hasAddToFavorite,
        totalPrice,
      }
    }>
      <div className="wrapper">
        {cartOpened &&
          <Drawer
            onClose={() => setCartOpened(false)}
            onDelete={onDeleteItemCart}
          />
        }
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route exact path="/" element={
            <Main
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
          />
          <Route path="/favorite" element={
            <Favorite />
          }
          />
          <Route path="/orders" element={
            <Orders />
          }
          />
        </Routes>
      </div>
    </AppContext.Provider >
  );
}

export default App;
