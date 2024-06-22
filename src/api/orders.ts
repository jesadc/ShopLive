import axios from 'axios';

// Utilizar la variable de entorno para la URL base de la API
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getOrders = async () => {
  const response = await api.get('/orders');
  return response.data;
};

export const createOrder = async (order: { customerName: string; productName: string; quantity: number }) => {
  const response = await api.post('/orders', order);
  return response.data;
};
