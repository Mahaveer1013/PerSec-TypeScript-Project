import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../data/auth/dummyUser';
import { authInterface } from '../interfaces/auth/auth.interface';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<authInterface>) => {
      state.user = action.payload; // Payload contains user data
    },
    logout: (state) => {
      state.user = null; // Clear user data
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
