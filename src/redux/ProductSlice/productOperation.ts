import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IProduct } from '../types/types';

axios.defaults.baseURL = import.meta.env.BASE_URL;

export const fetchProducts = createAsyncThunk<IProduct[]>('products/fetchProducts', async () => {
  const response = await axios.get<IProduct[]>('/products');

  return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id: number) => {
  const response = await axios.delete(`/products/${id}`);

  return response.data;
});
