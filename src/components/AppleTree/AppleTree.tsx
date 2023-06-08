import { Apple } from "../Apple/Apple";
import { Tree } from "../Tree/Tree";

export const AppleTree = () => {
    const numApples = 20;
    const treeWidth = 550;
    const treeHeight = 900;
    const treeRadius = treeHeight / 2 / 2;

    const apples = Array.from({ length: numApples }).map((_, index) => {
        const angle = Math.random() * 360 * (Math.PI / 180);
        const radius = Math.sqrt(Math.random()) * treeRadius;

        const left = Math.cos(angle) * radius;
        const top = Math.sin(angle) * radius;
        return (
            <Apple
                key={index}
                className="w-[70px] h-[70px] absolute"
                style={{
                    left: `${treeRadius + left}px`,
                    top: `${treeRadius + top}px`,
                }}
            />
        );
    });

    const treeStyle = {
        width: `${treeWidth}px`,
        height: `${treeHeight}px`,
    };

    return (
        <div className="relative">
            <Tree className="" style={treeStyle} />
            {apples}
        </div>
    );
};
