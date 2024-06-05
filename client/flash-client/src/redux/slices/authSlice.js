import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    token: "",
    phoneNum: "",
    deviceType: false,
    customerName: "",
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    addPhone: (state, action) => {
      state.phoneNum = action.payload;
    },
    checkDevice: (state, action) => {
      state.deviceType = action.payload;
    },
    addCustomerName: (state, action) => {
      state.customerName = action.payload;
    },
  },
});

export const { login, addPhone, checkDevice, addCustomerName } =
  authSlice.actions;
export default authSlice.reducer;
