import React from 'react';

const Cart = ({ cartItems }) => (
  <div className="cart">
    <h2>Your Shopping Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      cartItems.map(item => (
        <div key={item.id}>
          <p>{item.title} - {item.quantity} x ${item.price}</p>
        </div>
      ))
    )}
  </div>
);

export default Cart;
