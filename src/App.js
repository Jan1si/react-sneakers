import { Card } from "./components/Card";
import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";

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
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    </div>
  );
}

export default App;
