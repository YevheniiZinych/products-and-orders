import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './OrderSlice/orderSlice';
import productReducer from './ProductSlice/productSlice';

export const store = configureStore({
  reducer: {
    order: orderReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
