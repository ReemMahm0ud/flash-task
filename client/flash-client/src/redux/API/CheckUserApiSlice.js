import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CheckUserApiSlice = createApi({
  reducerPath: "CheckUserApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    isRegistered: builder.mutation({
      query: ({ token, phone }) => ({
        url: "/users/checkUser",
        method: "POST",
        body: { phone: phone },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useIsRegisteredMutation } = CheckUserApiSlice;
