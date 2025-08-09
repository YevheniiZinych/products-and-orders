import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IProduct } from '../../types/types';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const fetchProducts = createAsyncThunk<IProduct[]>('products/fetchProducts', async () => {
  const response = await api.get<IProduct[]>('/products');

  return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id: number) => {
  const response = await api.delete(`/products/${id}`);

  return response.data;
});
