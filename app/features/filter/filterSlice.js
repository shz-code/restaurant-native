import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites = state.favorites.concat(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id != action.payload
      );
    },
  },
});

export default filterSlice.reducer;
export const { addFavorite, removeFavorite } = filterSlice.actions;
