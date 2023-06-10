import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as AppleSvg } from "../../assets/apple.svg";

type TCoordinates = {
    left: string;
    top: string;
};
export const Apple = ({
    coords,
    idx,
    isMobile,
}: {
    coords: TCoordinates;
    idx: number;
    isMobile: boolean;
}) => {
    const shouldShake = useSelector(
        (state: { shouldShake: boolean }) => state.shouldShake
    );

    const isShakeDone = useSelector(
        (state: { isShakeDone: boolean }) => state.isShakeDone
    );

    const firstRender = useRef(true);

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
            const heightFromTop = parseInt(coords.top);
            const fallHeightModifier = isMobile ? 500 : 790;
            const fallHeight = fallHeightModifier - heightFromTop;
            const fallDuration = 1;
            let delay = "1";
            if (idx !== 0) {
                delay = (
                    (parseInt(coords.top) + parseInt(coords.left)) *
                    0.01
                ).toFixed(2);
            }

            return {
                transition: `transform ${fallDuration}s linear ${delay}s`,
                transform: `translateY(${fallHeight}px)`,
            };
        } else {
            return null;
        }
    }, [isShakeDone, coords, idx, isMobile]);

    return (
        <div
            id={`apple-${idx}`}
            className={`apple w-[60px] h-[60px] md:w-[40px] md:h-[40px] absolute ${extraClassName} z-10`}
            style={{
                ...fallClassName,
                ...coords,
            }}
        >
            <AppleSvg />
        </div>
    );
};
