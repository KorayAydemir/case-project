import { configureStore } from "@reduxjs/toolkit";
import { isShakeDoneReducer, shouldShakeReducer } from "./slices/shakeSlice";
import { isMobileReducer } from "./slices/isMobileSlice";
import { gameStateReducer } from "./slices/gameStateSlice";

export const store = configureStore({
    reducer: {
        shouldShake: shouldShakeReducer,
        isShakeDone: isShakeDoneReducer,
        setIsMobile: isMobileReducer,
        gameState: gameStateReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
