import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/shop">Shop</Link></li>
    </ul>
    <div className="cart-info">
      <span>Cart: {cartCount} items</span>
      <Link to="/cart">Go to Cart</Link>
    </div>
  </nav>
);

export default Navbar;
