import { AppleTree } from "./components/AppleTree/AppleTree";
import { ShakeTreeButton } from "./components/ShakeTreeButton/ShakeTreeButton";
import { Basket } from "./components/Basket/Basket";

function App() {
    return (
        <div className="flex flex-row p-2 mx-auto max-w-screen-md justify-between">
            <AppleTree />
            <ShakeTreeButton />
            <Basket />
        </div>
    );
}

export default App;
