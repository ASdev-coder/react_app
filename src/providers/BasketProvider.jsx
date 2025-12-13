import React, { useState } from "react";
import BasketContext from "../contexts/BasketContext";

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((prev) => [...prev, product]);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
