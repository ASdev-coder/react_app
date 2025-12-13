import React, { useContext } from "react";
import BasketContext from "../contexts/BasketContext";

const Basket = () => {
  const { basket } = useContext(BasketContext);

  if (basket.length === 0) {
    return <h2>Basket is empty</h2>;
  }

  return (
    <div className="basket-page">
      <h1>Your basket</h1>

      {basket.map((item) => (
        <div className="basket-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="basket-info">
            <h3>{item.name}</h3>
            <p className="basket-description">{item.description}</p>
          </div>

          <div className="basket-actions">
            <span className="basket-price">${item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Basket;
