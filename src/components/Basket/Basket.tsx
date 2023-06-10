import { useEffect } from "react";
import { ReactComponent as BasketSvg } from "../../assets/apple_basket-cropped.svg";
import { useCursorTracker } from "../../hooks/useCursorTracker";
export const Basket = () => {
    const { pos, handleMouseMove } = useCursorTracker();

    useEffect(() => {
        const checkCollision = () => {
            const apples = document.getElementsByClassName("apple");
            const applesArray = Array.from(apples);

            const basketRect = document
                .getElementById("basket")
                ?.getBoundingClientRect();

            applesArray.forEach((apple) => {
                const appleRect = apple.getBoundingClientRect();

                if (appleRect && basketRect) {
                    const collision = !(
                        appleRect.right < basketRect.left ||
                        appleRect.left > basketRect.right ||
                        appleRect.bottom < basketRect.top ||
                        appleRect.top > basketRect.bottom
                    );

                    if (collision) {
                        apple.classList.add("hidden");
                    }
                }
            });
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
    }, []);

    return (
        <div
            id="basket"
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
