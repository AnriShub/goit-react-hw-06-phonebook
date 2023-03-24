import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: '',
    reducers: {
        setContactsFilter: (state, action) => action.payload,
    },
});

export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
