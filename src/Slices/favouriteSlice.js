import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favourites: localStorage.getItem("favourites")
        ? JSON.parse(localStorage.getItem("favourites"))
        : [],
};

export const favouriteSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        addToFavourite: (state, action) => {
            const item = action.payload;

            // stop duplicates
            const exists = state.favourites.find(fav => fav.id === item.id);
            if (!exists) {
                state.favourites.push(item);
                localStorage.setItem("favourites", JSON.stringify(state.favourites));
            }
        },

        removeFromFavourite: (state, action) => {
            const id = action.payload;
            state.favourites = state.favourites.filter(item => item.id !== id);
            localStorage.setItem("favourites", JSON.stringify(state.favourites));
        },
    },
});

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
