import { configureStore } from "@reduxjs/toolkit";
import { shouldShakeReducer } from "./slices/shouldShakeSlice";

export const store = configureStore({
    reducer: {
        shouldShake: shouldShakeReducer,
    },
});
