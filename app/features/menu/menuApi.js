import apiSlice from "../api/apiSlice";

const menuApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => "todos",
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;
