
function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between ">
        <div className="header__logo d-flex align-center">
          <img className="logo__img" src="img/logo.png" alt="" />
          <div className="logo__text">
            <h3>React Sleakers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="header__nav clear d-flex align-center">
            <li className="nav__item d-flex mr-30">
              <img width={18} height={18} className="mr-10" src="img/cart.svg" alt="" />
              <span>1000 руб.</span>
            </li>
            <li className="nav__item d-flex align-center">
              <img width={18} height={18} src="img/user.svg" alt="" />
            </li>
          </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>

        <ul className="list__product mt-40 d-flex">
          <div className="card ">
            <img width={133} height={112} className="card__img" src="img/sneakers/1.jpg" alt="" />
            <p className="card__name mt-15">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__info d-flex justify-between mt-15 align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена: </span>
                <b>12000 р.</b>
              </div>
              <button className="btn__cart">
                <img width={11} height={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card ">
            <img width={133} height={112} className="card__img" src="img/sneakers/2.jpg" alt="" />
            <p className="card__name mt-15">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__info d-flex justify-between mt-15 align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена: </span>
                <b>12000 р.</b>
              </div>
              <button className="btn__cart">
                <img width={11} height={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card ">
            <img width={133} height={112} className="card__img" src="img/sneakers/3.jpg" alt="" />
            <p className="card__name mt-15">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__info d-flex justify-between mt-15 align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена: </span>
                <b>12000 р.</b>
              </div>
              <button className="btn__cart">
                <img width={11} height={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card ">
            <img width={133} height={112} className="card__img" src="img/sneakers/4.jpg" alt="" />
            <p className="card__name mt-15">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__info d-flex justify-between mt-15 align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена: </span>
                <b>12000 р.</b>
              </div>
              <button className="btn__cart">
                <img width={11} height={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
