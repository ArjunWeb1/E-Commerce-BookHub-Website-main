import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = ({ products, setFilteredProducts }) => {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  // Handle search input change
  

  return (
    <header>
      <div className="logo">
        <Link to="/">E-Commerce Book Selling - Buying Website</Link>
      </div>
      
      <nav>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/order-history">Order History</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
        <Link to="/cart">
          Cart ({cart.length})
        </Link>
      </nav>

      {/* Search Box */}
      
    </header>
  );
};

export default Header;
