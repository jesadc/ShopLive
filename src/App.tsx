import React from 'react';
import Dashboard from './components/Dashboard';
import OrderForm from './components/OrderForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Sistema de Gestión de Pedidos</h1>
      <OrderForm />
      <Dashboard />
    </div>
  );
};

export default App;
