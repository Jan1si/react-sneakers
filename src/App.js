import { Card } from "./components/Card";
import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import {useState, useEffect} from "react"

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://631f591e58a1c0fe9f6736c1.mockapi.io/items")
    .then(response => {
      return response.json();
    }).then((json) => {
      setItems(json);
      setLoader(false);
    });
  }, []);

  const onAddItemCart = (obj) => {
    setCartItems(cartItems => [...cartItems, obj]);
  };

  const onRemoveItemCart = ({title}) => {
    setCartItems(cartItems.filter(item => item.title !== title));
  }
  
  console.log(cartItems);

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onRemove={(title) => onRemoveItemCart(title)} cartItems={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content">
        <div className="header__content">
          <h1>Все кроссовки</h1>
          <div className="search__block">
            <img src="img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <ul className="list__product mt-40 d-flex">
          {loader && "Загрузка"}
          {items.map((item, idx) =>
            <Card
              key={idx}
              title={item.title}
              price={item.price}
              imgUrl={item.img}
              onFavorite={() => alert("Добавленно в закладки")}
              onPlus={(obj) => onAddItemCart(obj)}
              onRemove={(title) => onRemoveItemCart(title)}
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
