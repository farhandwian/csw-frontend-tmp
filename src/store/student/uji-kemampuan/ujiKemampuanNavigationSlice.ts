import { createSlice, PayloadAction, AsyncThunkAction } from "@reduxjs/toolkit";

import { registerUser, userLogin } from "./ujiKemampuanNavigationAction";

// initialize userToken from local storage
// const userToken = localStorage.getItem("userToken")
//   ? localStorage.getItem("userToken")
//   : null;

type UjiKemampuanData = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export interface UjiKemampuanState {
  loading: boolean;
  ujiKemampuanData: null | UjiKemampuanData; // You will need to define the UserInfo type
  error: null | string;
  success: boolean;
}

const initialState: UjiKemampuanState = {
  loading: false,
  ujiKemampuanData: null,
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
      (state, action: PayloadAction<UjiKemampuanState>) => {
        state.loading = false;
        state.userInfo = action.payload.userInfo;
        state.userToken = action.payload.userToken;
      },
    );
    builder.addCase(
      userLogin.rejected,
      (state, action: PayloadAction<UjiKemampuanState | any>) => {
        state.loading = false;
        state.error = action.payload;
      },
    );
  },
});

export default authSlice.reducer;
