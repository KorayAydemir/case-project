import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as AppleSvg } from "../../assets/apple.svg";

type TCoordinates = {
    left: string;
    top: string;
};
export const Apple = ({ coords }: { coords: TCoordinates }) => {
    const shouldShake = useSelector(
        (state: { shouldShake: boolean }) => state.shouldShake
    );

    const isShakeDone = useSelector(
        (state: { isShakeDone: boolean }) => state.isShakeDone
    );

    const firstRender = useRef(true);

    /** we need to check if it is the first render
     * to apply the scale animation and get rid of
     * it if not so it wont render multiple  times
     */
    const extraClassName = useMemo(() => {
        if (shouldShake) {
            return "apple-shake-anim";
        }
        if (firstRender.current) {
            firstRender.current = false;
            return "apple-start-anim";
        }
        return "";
    }, [shouldShake]);

    const fallClassName = useMemo(() => {
        if (isShakeDone) {
            console.log("done");
            const heightFromTop = parseInt(coords.top);
            const fallHeight = 690 - heightFromTop;
            const fallDuration = (fallHeight * 0.01).toFixed(2);
            console.log(
                `fallheight: ${fallHeight} fallDuration: ${fallDuration}}`
            );
            return {
                transition: `transform ${fallDuration}s ease-in-out`,
                transform: `translateY(${fallHeight}px)`,
            };
        }
        return "";
    }, [isShakeDone, coords]);

    return (
        <AppleSvg
            className={`w-[70px] h-[70px] absolute ${extraClassName}`}
            style={{
                ...fallClassName,
                ...coords,
            }}
        />
    );
};
