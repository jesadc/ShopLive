import axios from 'axios';

// Define el tipo Order
export interface Order {
  id?: string;
  customerName: string;
  productName: string;
  quantity: number;
}

const api = axios.create({
  baseURL: 'https://shielded-beach-37267.herokuapp.com', // URL base directa
});

export const getOrders = async () => {
  const response = await api.get('/orders');
  return response.data;
};

export const createOrder = async (order: Omit<Order, 'id'>) => {
  const response = await api.post('/orders', order);
  return response.data;
};
