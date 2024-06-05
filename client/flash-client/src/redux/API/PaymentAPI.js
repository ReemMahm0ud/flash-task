import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PaymentApiSlice = createApi({
  reducerPath: "PaymentApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    initatePayment: builder.mutation({
      query: ({ token, payload }) => ({
        url: "/orders",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: payload,
      }),
    }),
  }),
});

export const { useInitatePaymentMutation } = PaymentApiSlice;
