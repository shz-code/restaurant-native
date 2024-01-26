import apiSlice from "../api/apiSlice";

const mealApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMeals: builder.query({
      query: () => "dishes.json",
    }),
  }),
});

export const { useGetMealsQuery } = mealApi;
