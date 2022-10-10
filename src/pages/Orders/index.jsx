import React from 'react';
import axios from 'axios';
import { Card } from '../../components/Card';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/orders").then(({ data }) => {
      setOrders(data);
    });
  }, [])

  return (
    <div className="content">

      {orders.length > 0 ? (
        <div className="header__content">
          <h2>Мои заказы</h2>
        </div>) : null
      }


      {orders.length > 0 ?
        orders.map((order, idx) =>
          <>
            <div className="date__order">
              <p>{order.items.date}</p>
            </div>
            <ul key={idx} className="list__product mt-40 d-flex">
              {order.items.obj.map((item, idx) =>
                <Card
                  key={idx}
                  {...item}
                />
              )}
            </ul>
          </>
        ) :
        <div className="empty__favorite">
          <img width={70} height={70} src="img/empty-favorite.png" alt="" />
          <h1>У вас нет заказов :(</h1>
          <p>Вы ничего не купили</p>
          <Link to="/" >
            <button className="green__btn empty__btn"><img src="img/arrow.svg" alt="Arrow" />Вернуться назад</button>
          </Link>
        </div>
      }

    </div>
  )
}
