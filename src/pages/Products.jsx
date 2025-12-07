import React from 'react';
import { useLoaderData } from 'react-router';

const Products = () => {

    const products = useLoaderData();

    return (
      <div>
        <h1>Products</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Products;
