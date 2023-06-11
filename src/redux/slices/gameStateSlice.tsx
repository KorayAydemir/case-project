import { createSlice } from "@reduxjs/toolkit";

export enum GameState {
    LOST = "LOST",
    WON = "WON",
    PLAYING = "PLAYING",
}

export type GameStateType = {
    now: GameState;
    score: number;
};

const initialGameState = {
    now: GameState.PLAYING,
    score: 0,
};

export const gameStateSlice = createSlice({
    name: "gameState",
    initialState: initialGameState,
    reducers: {
        setGameState: (state, action) => {
            state = action.payload;
            return state;
        },
    },
});

export const { setGameState } = gameStateSlice.actions;

export const gameStateReducer = gameStateSlice.reducer;
