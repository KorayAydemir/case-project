import { useSelector } from "react-redux";
import { Tree } from "../Tree/Tree";
import { useCallback, useMemo } from "react";
import { Apple } from "../Apple/Apple";
import { RootState } from "@components/redux/store";

export const AppleTree = () => {
    const shouldShake = useSelector(
        (state: { shouldShake: boolean }) => state.shouldShake
    );
    const isMobile = useSelector((state: RootState) => state.setIsMobile);

    const treeWidth = isMobile ? 300 : 550;
    const treeHeight = isMobile ? 550 : 900;

    const treeStyle = {
        width: `${treeWidth}px`,
        height: `${treeHeight}px`,
    };

    const getAppleCoordinates = useCallback(() => {
        const numApples = 12;
        const treeRadius = treeHeight / 2 / 2;
        return Array.from({ length: numApples }).map(() => {
            const angle = Math.random() * 360 * (Math.PI / 180);
            const radius = Math.sqrt(Math.random()) * treeRadius;

            const left = Math.cos(angle) * radius;
            const top = Math.sin(angle) * radius;

            return {
                left: `${treeRadius + left}px`,
                top: `${treeRadius + top}px`,
            };
        });
    }, [treeHeight]);

    const applesCoords = useMemo(() => {
        return getAppleCoordinates();
    }, [getAppleCoordinates]);

    return (
        <div className="relative mx-auto max-w-screen-md">
            <Tree
                className={`${shouldShake ? "tree-shake-anim" : ""}`}
                style={treeStyle}
            />
            {applesCoords.map((coords, i) => (
                <Apple coords={coords} key={i} idx={i} isMobile={isMobile} />
            ))}
        </div>
    );
};
