import { createSlice } from "@reduxjs/toolkit";

interface LayoutState {
  showNav: boolean;
  isMobile: boolean;
}

const initialState: LayoutState = {
  showNav: true,
  isMobile: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setShowNav(state, action) {
      state.showNav = action.payload;
    },
    setIsMobile(state, action) {
      state.isMobile = action.payload;
    },
  },
});

export const { setShowNav, setIsMobile } = layoutSlice.actions;
export default layoutSlice.reducer;
