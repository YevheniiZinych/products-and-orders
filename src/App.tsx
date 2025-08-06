import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import AppLayout from './layout/AppLayout';
import './App.css';

const OrderPage = lazy(() => import('./pages/OrdersPage/OrderPage'));
const ProductPage = lazy(() => import('./pages/OrdersPage/OrderPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="orders" />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="products" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
