import { useGetGameStateInfo } from "./useGetGameStateInfo";
export const GameOverScreen = () => {
    const gameState = useGetGameStateInfo();
    return (
        <div className="inset-0 absolute w-full bg-black h-full opacity-80 flex items-center justify-center text-white">
            <div className="flex flex-col">
                <span>Score: {gameState.score}</span>
                <span className="text-8xl font-bold mx-auto z-1 mb-12">
                    {gameState.message}
                </span>
                <span className="text-2xl font-bold mx-auto z-1 mb-12">
                    {gameState.subMessage}
                </span>
            </div>
        </div>
    );
};
