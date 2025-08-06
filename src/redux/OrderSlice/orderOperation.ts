import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IOrder } from '../types/types';

axios.defaults.baseURL = import.meta.env.BASE_URL;

export const fetchOrders = createAsyncThunk<IOrder[]>('orders/fetchOrders', async () => {
  const response = await axios.get<IOrder[]>('/orders');

  return response.data;
});

export const deleteOrder = createAsyncThunk('orders/deleteOrder', async (id: number) => {
  const response = await axios.delete(`/orders/${id}`);

  return response.data;
});
