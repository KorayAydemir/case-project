import { Apple } from "../Apple/Apple";
import { Tree } from "../Tree/Tree";

export const AppleTree = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <span className="text-2xl">Hello</span>
            <div className="relative">
                <Tree className={"absolute w-[550px] mx-auto mr-5"} />
                <Apple className={"absolute w-[80px] "} />
            </div>
        </div>
    );
};
