import React, { createContext, useState, useContext } from 'react';

// OrderHistoryContext to manage order history
const OrderHistoryContext = createContext();

export const OrderHistoryProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrderHistory = (userId) => {
    // Replace with an actual API call
    const dummyOrders = [
      { id: 1, date: "2024-12-01", total: 120, items: [{ name: "Product 1", quantity: 2 }, { name: "Product 2", quantity: 1 }] },
      { id: 2, date: "2024-12-10", total: 250, items: [{ name: "Product 3", quantity: 1 }] },
    ];
    setOrders(dummyOrders);
  };

  return (
    <OrderHistoryContext.Provider value={{ orders, fetchOrderHistory }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};

// Custom hook to use the OrderHistoryContext
export const useOrderHistory = () => useContext(OrderHistoryContext);
