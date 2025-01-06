import React from 'react';
import './OrderHistory.css';

const OrderHistory = () => {
  const orders = [
    {
      id: 1,
      items: ['The Great Gatsby', 'To Kill a Mockingbird'],
      total: 45.99,
      date: '2024-12-20',
    },
    {
      id: 2,
      items: ['1984', 'Harry Potter and the Sorcerer\'s Stone'],
      total: 65.49,
      date: '2024-12-18',
    },
  ];

  return (
    <div className="order-history-container">
      <h2>Your Order History</h2>
      {orders.length === 0 ? (
        <p>You have no past orders.</p>
      ) : (
        <ul className="order-list">
          {orders.map((order) => (
            <li key={order.id} className="order-card">
              <h3>Order #{order.id}</h3>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Items:</strong> {order.items.join(', ')}</p>
              <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
