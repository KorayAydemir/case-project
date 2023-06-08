import { AppleTree } from "./components/AppleTree/AppleTree";
import { ShakeTreeButton } from "./components/ShakeTreeButton/ShakeTreeButton";

function App() {
    return (
        <div className="flex flex-row p-2 mx-auto max-w-screen-md justify-between">
            <AppleTree />
            <ShakeTreeButton />
        </div>
    );
}

export default App;
