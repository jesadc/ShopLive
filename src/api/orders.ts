import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const getOrders = async () => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const createOrder = async (order: { customerName: string; productName: string; quantity: number }) => {
  try {
    const response = await api.post('/orders', order);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
