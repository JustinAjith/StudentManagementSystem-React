import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem('token');

const initialState = {
  token: token || null,
  isAuthenticated: !! token,
  loading: false,
  error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.token = action.payload.access_token;
            
            // Save token to local storage for persistence
            localStorage.setItem('token', action.payload.access_token);
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
            
            // Remove token from local storage
            localStorage.removeItem('token');
        },
    }
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;