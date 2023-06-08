import { createSlice } from "@reduxjs/toolkit";
export const shouldShakeSlice = createSlice({
    name: "shouldShake",
    initialState: false,
    reducers: {
        setShouldShake: (state, action) => {
            state = action.payload;
            return state;
        },
    },
});

export const { setShouldShake } = shouldShakeSlice.actions;

export const shouldShakeReducer = shouldShakeSlice.reducer;
