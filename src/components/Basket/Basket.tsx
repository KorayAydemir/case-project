import { useEffect, useRef } from "react";
import { ReactComponent as BasketSvg } from "../../assets/apple_basket-cropped.svg";
import { useCursorTracker } from "../../hooks/useCursorTracker";
export const Basket = () => {
    const { pos, handleMouseMove } = useCursorTracker();
    const basketRef = useRef<HTMLDivElement>(null);
    const applesRef = useRef<Element[] | null>(null);

    useEffect(() => {
        const checkCollision = () => {
            const basketRect = basketRef.current?.getBoundingClientRect();

            applesRef?.current?.forEach((apple) => {
                const appleRect = apple.getBoundingClientRect();

                if (appleRect && basketRect) {
                    if (isColliding(appleRect, basketRect)) {
                        apple.classList.add("hidden");
                    }
                }
            });
        };

        const animate = () => {
            checkCollision();
            requestAnimationFrame(animate);
        };

        const animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useEffect(() => {
        applesRef.current = Array.from(
            document.getElementsByClassName("apple")
        );
    }, []);

    const isColliding = (appleRect: DOMRect, basketRect: DOMRect): boolean => {
        return !(
            appleRect.right < basketRect.left ||
            appleRect.left > basketRect.right ||
            appleRect.bottom < basketRect.top ||
            appleRect.top > basketRect.bottom
        );
    };

    return (
        <div
            id="basket"
            ref={basketRef}
            className="absolute w-[135px] bottom-[110px] md:w-[90px]"
            style={{ transform: `translateX(-50%)`, left: pos.x }}
            onMouseMove={
                handleMouseMove as unknown as React.MouseEventHandler<HTMLDivElement>
            }
        >
            <BasketSvg />
        </div>
    );
};
