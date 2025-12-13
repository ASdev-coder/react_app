import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import BasketContext from '../contexts/BasketContext';


const Product = () => {

    const product = useLoaderData();
    const { addToBasket } = useContext(BasketContext);

    return (
      <div className="product-card-buy">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          <button className="buy-button" onClick={() => addToBasket(product)}>
            Buy now
          </button>
        </div>
      </div>
    );
}

export default Product;
