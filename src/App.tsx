import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import AppLayout from './layout/AppLayout';

const OrderPage = lazy(() => import('./pages/OrdersPage/OrderPage'));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="orders" />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
