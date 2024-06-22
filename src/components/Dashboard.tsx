// src/components/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { getOrders, Order } from '../api/orders';

const Dashboard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersData = await getOrders();
      setOrders(ordersData);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.customerName} - {order.productName} - {order.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
