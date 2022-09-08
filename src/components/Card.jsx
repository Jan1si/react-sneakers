import React from 'react'

export const Card = () => {
  return (
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
  )
}
