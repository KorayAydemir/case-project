import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as AppleSvg } from "../../assets/apple.svg";

type TCoordinates = {
    left: string;
    top: string;
};
export const Apple = ({
    coords,
    idx,
}: {
    coords: TCoordinates;
    idx: number;
}) => {
    const shouldShake = useSelector(
        (state: { shouldShake: boolean }) => state.shouldShake
    );

    const isShakeDone = useSelector(
        (state: { isShakeDone: boolean }) => state.isShakeDone
    );

    const firstRender = useRef(true);

    const [hasCollided, setHasCollided] = useState(false);

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
            const fallHeight = 690 - heightFromTop;
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
    }, [isShakeDone, coords, idx]);

    useEffect(() => {
        const checkCollision = () => {
            const appleRect = document
                .getElementById(`apple-${idx}`)
                ?.getBoundingClientRect();
            const basketRect = document
                .getElementById("basket")
                ?.getBoundingClientRect();

            if (appleRect && basketRect) {
                const collision = !(
                    appleRect.right < basketRect.left ||
                    appleRect.left > basketRect.right ||
                    appleRect.bottom < basketRect.top ||
                    appleRect.top > basketRect.bottom
                );

                setHasCollided(collision);
            }
        };
        let animationFrameId: number;

        const animate = () => {
            checkCollision();
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [idx, hasCollided]);

    return (
        !hasCollided && (
            <div
                id={`apple-${idx}`}
                className={`w-[60px] h-[60px] md:w-[40px] md:h-[40px] absolute ${extraClassName}`}
                style={{
                    ...fallClassName,
                    ...coords,
                }}
            >
                <AppleSvg />
            </div>
        )
    );
};
