import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "paymentSlice",
  initialState: {
    paymentLink: "",
  },
  reducers: {
    savePaymentLink: (state, action) => {
      state.paymentLink = action.payload;
    },
  },
});

export const { savePaymentLink } = paymentSlice.actions;
export default paymentSlice.reducer;
