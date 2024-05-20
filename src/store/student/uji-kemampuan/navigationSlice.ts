import { createSlice } from "@reduxjs/toolkit";
import { typeUjiKemampuanTestURL } from "@/types/uji-kemampuan";
interface navigationState {
  ujiKemampuanmoduleNav: number;
  ujiKemampuanTestTypeNav: typeUjiKemampuanTestURL;
}

const initialState: navigationState = {
  ujiKemampuanmoduleNav: 1,
  ujiKemampuanTestTypeNav: "pretest",
};

const navigationSlice = createSlice({
  name: "uji-kemampuan-navigation",
  initialState,
  reducers: {
    setujiKemampuanmoduleNav(state, action) {
      state.ujiKemampuanmoduleNav = action.payload;
    },
    setujiKemampuantestTypeNav(state, action) {
      state.ujiKemampuanTestTypeNav = action.payload;
    },
  },
});

export const { setujiKemampuanmoduleNav, setujiKemampuantestTypeNav } =
  navigationSlice.actions;
export default navigationSlice.reducer;
