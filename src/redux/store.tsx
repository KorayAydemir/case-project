import { configureStore } from "@reduxjs/toolkit";
import { isShakeDoneReducer, shouldShakeReducer } from "./slices/shakeSlice";

export const store = configureStore({
    reducer: {
        shouldShake: shouldShakeReducer,
        isShakeDone: isShakeDoneReducer,
    },
});
