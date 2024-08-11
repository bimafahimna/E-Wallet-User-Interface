import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  isRegisterError: boolean;
  isRegisterSuccess: boolean;
  errorRegisterMsg: string | null;
  isLoginError: boolean;
  errorLoginMsg: string | null;
}

const initialState: AppState = {
  isRegisterError: false,
  isRegisterSuccess: false,
  errorRegisterMsg: null,
  isLoginError: false,
  errorLoginMsg: null,
};

export const appSlice = createSlice({
  name: 'wallet_auth',
  initialState: initialState,
  reducers: {
    setIsRegisterError: (state, action) => {
      state.isRegisterError = action.payload;
    },
    setErrorRegisterMsg: (state, action) => {
      state.errorRegisterMsg = action.payload;
    },
    setRegisterSuccess: (state, action) => {
      state.isRegisterSuccess = action.payload;
    },
    setIsLoginError: (state, action) => {
      state.isLoginError = action.payload;
    },
    setErrorLoginMsg: (state, action) => {
      state.errorLoginMsg = action.payload;
    },
  },
});

export const {
  setErrorLoginMsg,
  setErrorRegisterMsg,
  setIsLoginError,
  setIsRegisterError,
  setRegisterSuccess,
} = appSlice.actions;

export default appSlice.reducer;
