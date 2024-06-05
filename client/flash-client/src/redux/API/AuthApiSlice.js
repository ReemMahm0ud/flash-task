import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthApiSlice = createApi({
  reducerPath: "AuthApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    loginApi: builder.mutation({
      query: (clientLogin) => ({
        url: "/auth/token",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${clientLogin}`,
        },
      }),
    }),
  }),
});

export const { useLoginApiMutation } = AuthApiSlice;
