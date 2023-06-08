import { useDispatch, useSelector } from "react-redux";
import { Apple } from "../Apple/Apple";
import { Tree } from "../Tree/Tree";
import { useCallback, useEffect, useMemo } from "react";
import { setShouldShake } from "../../redux/slices/shouldShakeSlice";

export const AppleTree = () => {
    const shouldShake = useSelector(
        (state: { shouldShake: boolean }) => state.shouldShake
    );
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setShouldShake(false));
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [shouldShake, dispatch]);

    const treeWidth = 550;
    const treeHeight = 900;

    const getAppleCoordinates = useCallback(() => {
        const numApples = 20;
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
    }, []);

    const apples = useMemo(() => {
        return getAppleCoordinates().map((coordinates, index) => {
            return (
                <Apple
                    key={index}
                    className="w-[70px] h-[70px] absolute apple-anim"
                    style={coordinates}
                />
            );
        });
    }, [getAppleCoordinates]);

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
