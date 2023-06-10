import { createSlice } from "@reduxjs/toolkit";

export const isMobileSlice = createSlice({
    name: "isMobile",
    initialState: null,
    reducers: {
        setIsMobile: (state, action) => {
            state = action.payload;
            return state;
        },
    },
});

export const { setIsMobile } = isMobileSlice.actions;

export const isMobileReducer = isMobileSlice.reducer;
