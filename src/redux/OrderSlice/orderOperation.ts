import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IOrder } from '../types/types';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const fetchOrders = createAsyncThunk<IOrder[]>('orders/fetchOrders', async () => {
  const response = await api.get<IOrder[]>('/orders');

  return response.data;
});

export const deleteOrder = createAsyncThunk('orders/deleteOrder', async (id: number) => {
  const response = await api.delete(`/orders/${id}`);

  return response.data;
});
