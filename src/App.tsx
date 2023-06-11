import { AppleTree } from "./components/AppleTree/AppleTree";
import { ShakeTreeButton } from "./components/ShakeTreeButton/ShakeTreeButton";
import { Basket } from "./components/Basket/Basket";
import { useHandleResize } from "./hooks/useHandleResize";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { GameState } from "./redux/slices/gameStateSlice";
import { GameOverScreen } from "./components/GameOverScreen/GameOverScreen";

function App() {
    const gameState = useSelector((state: RootState) => state.gameState);
    useHandleResize();
    const isMobile = useSelector((state: RootState) => state.setIsMobile);
    if (isMobile === null) return null;

    console.log(gameState);

    return (
        <>
            <span className="text-white opacity-80">v3</span>
            <div className="flex flex-row p-2  justify-between">
                <div className="relative">
                    <div className="flex">
                        <AppleTree />
                        <ShakeTreeButton />
                    </div>
                    <Basket />
                </div>
                {gameState.now !== GameState.PLAYING && <GameOverScreen />}
            </div>
        </>
    );
}

export default App;
