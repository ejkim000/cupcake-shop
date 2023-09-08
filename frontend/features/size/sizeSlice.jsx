import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import sizeService from './sizeService';

const initialState = {
  sizes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getSizes = createAsyncThunk(
  'sizes/getAll',
  async (_, thunkAPI) => {
    try {
      return await sizeService.getSizes();
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const sizeSlice = createSlice({
  name: 'size',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSizes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSizes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.sizes = action.payload;
      })
      .addCase(getSizes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = sizeSlice.actions;
export default sizeSlice.reducer;
