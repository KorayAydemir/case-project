import { GameState } from "../../redux/slices/gameStateSlice";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export function useGetGameStateInfo() {
    const gameState = useSelector((state: RootState) => state.gameState);

    const getGameState = () => {
        switch (gameState.now) {
            case GameState.WON:
                return {
                    state: gameState.now,
                    message: "You won!",
                    subMessage: "Good Job :)",
                    score: gameState.score,
                };
            case GameState.LOST:
                return {
                    state: gameState.now,
                    message: "You Lost!",
                    subMessage: "Fool.",
                    score: gameState.score,
                };
            default:
                return { state: "PLAYING", message: "What!", score: 0 };
        }
    };
    return getGameState();
}
