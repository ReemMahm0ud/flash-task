import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import paymentSlice from "./slices/paymentSlice";
import { AuthApiSlice } from "./API/AuthApiSlice";
import { PaymentApiSlice } from "./API/PaymentAPI";
import { CheckUserApiSlice } from "./API/CheckUserApiSlice";

export default configureStore({
  reducer: {
    authSlice: authSlice,
    paymentSlice: paymentSlice,
    [AuthApiSlice.reducerPath]: AuthApiSlice.reducer,
    [PaymentApiSlice.reducerPath]: PaymentApiSlice.reducer,
    [CheckUserApiSlice.reducerPath]: CheckUserApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthApiSlice.middleware,
      PaymentApiSlice.middleware,
      CheckUserApiSlice.middleware
    ),
});
