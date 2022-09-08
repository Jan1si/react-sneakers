
function App() {
  return (
    <div className="wrapper">

      <div style={{display: "none"}} className="owerlay">
        <div className="drawer">
          <div className="header__drawer">
            <h2>Корзина</h2>
            <img className="remove__btn" src="img/btn-remove.svg" alt="Close" />
          </div>
          <div className="content__drawer">
            <div className="cart__item">
              <div style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }} className="img__item"></div>
              <div className="text__item">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 р. </b>
              </div>
              <img className="remove__btn" src="img/btn-remove.svg" alt="Remove" />
            </div>

            <div className="cart__item">
              <div style={{ backgroundImage: 'url(img/sneakers/2.jpg)' }} className="img__item"></div>
              <div className="text__item">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 р. </b>
              </div>
              <img className="remove__btn" src="img/btn-remove.svg" alt="Remove" />
            </div>

            <div className="cart__item">
              <div style={{ backgroundImage: 'url(img/sneakers/3.jpg)' }} className="img__item"></div>
              <div className="text__item">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 р. </b>
              </div>
              <img className="remove__btn" src="img/btn-remove.svg" alt="Remove" />
            </div>

            <div className="cart__item">
              <div style={{ backgroundImage: 'url(img/sneakers/4.jpg)' }} className="img__item"></div>
              <div className="text__item">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 р. </b>
              </div>
              <img className="remove__btn" src="img/btn-remove.svg" alt="Remove" />
            </div>

            <div className="cart__item">
              <div style={{ backgroundImage: 'url(img/sneakers/5.jpg)' }} className="img__item"></div>
              <div className="text__item">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 р. </b>
              </div>
              <img className="remove__btn" src="img/btn-remove.svg" alt="Remove" />
            </div>
            <div className="cart__item">
              <div style={{ backgroundImage: 'url(img/sneakers/6.jpg)' }} className="img__item"></div>
              <div className="text__item">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 р. </b>
              </div>
              <img className="remove__btn" src="img/btn-remove.svg" alt="Remove" />
            </div>
          </div>

          <div className="footer__drawer">
            <ul className="total__block">
              <li className="d-flex">
                <span>Итого:</span>
                <div className="dash"></div>
                <b>21 498 р.</b>
              </li>
              <li className="d-flex">
                <span>Налог 5%:</span>
                <div className="dash"></div>
                <b>498 р.</b>
              </li>
            </ul>
            <button className="green__btn">Оформить заказ <img src="img/arrow.svg" alt="Arrow" /></button>
          </div>

        </div>
      </div>


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
        <div className="header__content">
          <h1>Все кроссовки</h1>
          <div className="search__block">
            <img src="img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
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
            <div className="favorite">
              <img src="img/unliked.svg" alt="Unliked" />
            </div>
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
