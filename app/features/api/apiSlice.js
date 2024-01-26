import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://restaurant-native-fc411-default-rtdb.asia-southeast1.firebasedatabase.app",
  }),
  endpoints: () => ({}),
});

export default apiSlice;
