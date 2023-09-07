import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// Get user information from localStorage
const user = JSON.parse(localStorage.getItem('cupcakeshop_user'));

// Set initialState
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//Signup user
export const signup = createAsyncThunk(
  'auth/signup',
  async (user, thunkAPI) => {
    try {
      return await authService.signup(user);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

        return thunkAPI.rejectWithValue(message);
    }
  }
);


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(signup.pending,(state) => {
            state.isLoading = true;
        })
        .addCase(signup.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(signup.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.user = null;
            state.message = action.payload;
        });
    },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;