import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      <div className="quantity-control">
        <button onClick={handleDecrement}>-</button>
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={() => onAddToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
