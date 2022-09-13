import { Card } from "./components/Card";
import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import {useState, useEffect} from "react"

function App() {

  const [items, setItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false);
  const [loader, setLoader] = useState(true);

  fetch("https://631f591e58a1c0fe9f6736c1.mockapi.io/items")
    .then(response => {
      return response.json();
    }).then((json) => {
      console.log(json);
    });

  useEffect(() => {
    fetch("https://631f591e58a1c0fe9f6736c1.mockapi.io/items")
    .then(response => {
      return response.json();
    }).then((json) => {
      console.log(json);
      setItems(json)
      setLoader(false);
    });
  }, [])

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
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
              onPlus={() => alert("Нажали плюс")} 
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
