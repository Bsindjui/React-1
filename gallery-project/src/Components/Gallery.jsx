import React from 'react';
import Product from './Product';

const Gallery = () => {

  const products = [
    { id: 1, name: "Pizza", image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg", price: 12.99 },
    { id: 2, name: "Burger", image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg", price: 9.99 },
    { id: 3, name: "Sushi", image: "https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_1280.jpg", price: 15.49 },
    { id: 4, name: "Pasta", image: "https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_1280.jpg", price: 11.89 },
    { id: 5, name: "Salad", image: "https://cdn.pixabay.com/photo/2021/01/10/04/37/salad-5904093_1280.jpg", price: 8.75 },
  ];

  return (
    <div className="gallery">
      <h1>Food Gallery</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
