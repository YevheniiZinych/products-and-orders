import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IProduct } from '../../types/types';
import { fetchProducts, deleteProduct } from './productOperation';

interface IProductState {
  items: IProduct[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  message: object | null;
}

const initialState: IProductState = {
  items: [],
  status: 'idle',
  error: null,
  message: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });

    builder
      .addCase(deleteProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<{ message: string }>) => {
        state.status = 'succeeded';
        state.message = action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export default productSlice.reducer;
