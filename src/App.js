import { Card } from "./components/Card";
import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";

const arr = [{
  title: "Мужские Кроссовки Nike Blazer Mid Suede",
  price: 12999,
  img: "1.jpg",
},
{
  title: "Мужские Кроссовки Nike Air Max 270",
  price: 13999,
  img: "2.jpg",
},
{
  title: "Мужские Кроссовки Nike Blazer Mid Suede",
  price: 8499,
  img: "3.jpg",
},
{
  title: "Кроссовки Puma X Aka Boku Future Rider",
  price: 8999,
  img: "4.jpg",
}
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="header__content">
          <h1>Все кроссовки</h1>
          <div className="search__block">
            <img src="img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <ul className="list__product mt-40 d-flex">
          {arr.map((item, idx) =>
            <Card
              idx={idx}
              title={item.title}
              price={item.price}
              imgUrl={item.img}
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
