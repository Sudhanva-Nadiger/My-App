import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  open: false,
}

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleDrawer: (state, action) => {
      state.open = action.payload
    }
  }
})

export const selectToggler = (state) => state.toggle.open

export const { toggleDrawer } = toggleSlice.actions

export default toggleSlice.reducer