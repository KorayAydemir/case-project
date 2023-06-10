import { AppleTree } from "./components/AppleTree/AppleTree";
import { ShakeTreeButton } from "./components/ShakeTreeButton/ShakeTreeButton";
import { Basket } from "./components/Basket/Basket";
import { useDispatch } from "react-redux";
import { setIsMobile } from "./redux/slices/isMobileSlice";
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                dispatch(setIsMobile(true));
            } else {
                dispatch(setIsMobile(false));
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dispatch]);

    return (
        <div className="flex flex-row p-2  justify-between">
            <div className="relative">
                <div className="flex">
                    <AppleTree />
                    <ShakeTreeButton />
                </div>
                <Basket />
            </div>
        </div>
    );
}

export default App;
