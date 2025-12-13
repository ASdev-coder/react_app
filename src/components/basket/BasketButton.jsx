import { ShoppingCartOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { Link } from "react-router";
import BasketContext from "../../contexts/BasketContext";

const BasketButton = () => {
  const { basket } = useContext(BasketContext);

  return (
    <Link to="/basket" className="basket-link">
      <button className="btn-icon">
        <ShoppingCartOutlined />
        {basket.length > 0 && (
          <span className="basket-count">{basket.length}</span>
        )}
      </button>
    </Link>
  );
};

export default BasketButton;
