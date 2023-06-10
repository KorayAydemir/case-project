import { AppleTree } from "./components/AppleTree/AppleTree";
import { ShakeTreeButton } from "./components/ShakeTreeButton/ShakeTreeButton";
import { Basket } from "./components/Basket/Basket";
import { useHandleResize } from "./hooks/useHandleResize";
import { useSelector } from "react-redux";

function App() {
    useHandleResize();
    const isMobile = useSelector(
        (state: { setIsMobile: boolean }) => state.setIsMobile
    );

    if (isMobile === null) return null;

    return (
        <>
            <span>1.2</span>
            <div className="flex flex-row p-2  justify-between">
                <div className="relative">
                    <div className="flex">
                        <AppleTree />
                        <ShakeTreeButton />
                    </div>
                    <Basket />
                </div>
            </div>
        </>
    );
}

export default App;
