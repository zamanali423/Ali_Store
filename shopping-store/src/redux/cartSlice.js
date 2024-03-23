import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addtoCart: (state, action) => {
      state.push(action.payload);
    },
    delProduct: (state, action) => {
      let ind = state.findIndex(
        (obj) =>
          obj.id === action.payload.id && obj.title === action.payload.title
      );
      if (ind !== -1) {
        state.splice(ind, 1);
      }
    },
  },
});

export const { addtoCart, delProduct } = cartSlice.actions;
export default cartSlice.reducer;
