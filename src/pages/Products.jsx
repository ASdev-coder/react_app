import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Products = () => {

    const products = useLoaderData();

    return (
      <div>
        <h1>Products</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.title}</h3>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Products;
