import { AppleTree } from "./components/AppleTree/AppleTree";
import { ShakeTreeButton } from "./components/ShakeTreeButton/ShakeTreeButton";
import { Basket } from "./components/Basket/Basket";

function App() {
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
