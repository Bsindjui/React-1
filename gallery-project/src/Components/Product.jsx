import React from 'react';
import './Product.jsx';

const Product = ({ name, image, price }) => {
  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price}</p>
    </div>
  );
};

export default Product;