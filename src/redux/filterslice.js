import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setNameFilter: {
            reducer(_, action) {
                return action.payload
            }
        },
    }
});

export const { setNameFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;