// src/api/orders.ts
import axios from 'axios';

// Define el tipo Order
export interface Order {
  id?: string;
  customerName: string;
  productName: string;
  quantity: number;
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getOrders = async () => {
  const response = await api.get('/orders');
  return response.data;
};

export const createOrder = async (order: Omit<Order, 'id'>) => {
  const response = await api.post('/orders', order);
  return response.data;
};
