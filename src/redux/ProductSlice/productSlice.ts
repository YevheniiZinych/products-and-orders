import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IProduct } from '../types/types';

interface IProductState {
  items: IProduct[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IProductState = {
  items: [],
  status: 'idle',
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
