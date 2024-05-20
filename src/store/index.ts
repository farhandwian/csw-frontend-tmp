// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import studentLayoutReducer from "./student/layout/layoutSlice";
import ujiKemampuanNavReducer from "./student/uji-kemampuan/navigationSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      studentLayout: studentLayoutReducer,
      ujiKemampuanNav: ujiKemampuanNavReducer,
    },
  });
};
// export default store;
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
