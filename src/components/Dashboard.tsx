import React, { useEffect, useState } from 'react';
import { getOrders, Order } from '../api/orders';

const Dashboard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Control</h1>
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
