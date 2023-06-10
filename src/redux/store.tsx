import { configureStore } from "@reduxjs/toolkit";
import { isShakeDoneReducer, shouldShakeReducer } from "./slices/shakeSlice";
import { isMobileReducer } from "./slices/isMobileSlice";

export const store = configureStore({
    reducer: {
        shouldShake: shouldShakeReducer,
        isShakeDone: isShakeDoneReducer,
        setIsMobile: isMobileReducer,
    },
});
