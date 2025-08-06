import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IOrder } from '../types/types';

interface IOrdersState {
  items: IOrder[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IOrdersState = {
  items: [],
  status: 'idle',
  error: null,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
