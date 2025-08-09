import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import ProductPage from './pages/ProductPage/ProductPage';
import OrderPage from './pages/OrdersPage/OrderPage';
import { NotFound } from './pages/NotFound/NotFound';

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
