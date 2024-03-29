import { createSlice, PayloadAction, AsyncThunkAction } from "@reduxjs/toolkit";

import { registerUser, userLogin } from "./authActions";

// initialize userToken from local storage
// const userToken = localStorage.getItem("userToken")
//   ? localStorage.getItem("userToken")
//   : null;

type UserInfo = {
  name: string;
  username: string;
  image: string;
};

export interface AuthState {
  loading: boolean;
  userInfo: null | UserInfo; // You will need to define the UserInfo type
  userToken: null | string; // You will need to define the type for userToken
  error: null | string;
  success: boolean;
}

const initialState: AuthState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(
      registerUser.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = "An error occurred";
        }
      },
    );

    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      userLogin.fulfilled,
      (state, action: PayloadAction<AuthState>) => {
        state.loading = false;
        state.userInfo = action.payload.userInfo;
        state.userToken = action.payload.userToken;
      },
    );
    builder.addCase(
      userLogin.rejected,
      (state, action: PayloadAction<AuthState | any>) => {
        state.loading = false;
        state.error = action.payload;
      },
    );
  },
});

export default authSlice.reducer;
