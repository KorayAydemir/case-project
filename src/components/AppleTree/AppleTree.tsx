import { useSelector } from "react-redux";
import { Apple } from "../Apple/Apple";
import { Tree } from "../Tree/Tree";
import { useMemo } from "react";

export const AppleTree = () => {
    const shouldShake = useSelector(
        (state: { shouldShake: boolean }) => state.shouldShake
    );

    const numApples = 20;
    const treeWidth = 550;
    const treeHeight = 900;
    const treeRadius = treeHeight / 2 / 2;

    const apples = useMemo(() => {
        return Array.from({ length: numApples }).map((_, index) => {
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
    }, [numApples, treeRadius]);

    const treeStyle = {
        width: `${treeWidth}px`,
        height: `${treeHeight}px`,
    };

    return (
        <div className="relative max-w-screen-xl">
            <Tree
                className={`${shouldShake ? "shake-animation" : ""}`}
                style={treeStyle}
            />
            {apples}
        </div>
    );
};
