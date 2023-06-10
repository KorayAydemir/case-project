import { useCallback, useEffect, useState } from "react";
import { ReactComponent as BasketSvg } from "../../assets/apple_basket-cropped.svg";
export const Basket = () => {
    const [pos, setPos] = useState({ x: 0 });

    const handleMouseMove = useCallback((e: Event) => {
        e.preventDefault();
        if ("touches" in e) {
            const touchEvent = e as TouchEvent;
            if (!touchEvent.touches[0]) {
                return;
            }
            const { clientX } = touchEvent.touches[0];
            setPos({ x: clientX });
        } else {
            const { clientX } = e as MouseEvent;
            setPos({ x: clientX });
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("touchmove", handleMouseMove, {
            passive: false,
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.addEventListener("touchmove", handleMouseMove);
        };
    }, [handleMouseMove]);
    return (
        <div
            id="basket"
            className="absolute w-[150px] bottom-[100px] md:w-[90px]"
            style={{ transform: `translateX(-50%)`, left: pos.x }}
            onMouseMove={
                handleMouseMove as unknown as React.MouseEventHandler<HTMLDivElement>
            }
        >
            <BasketSvg />
        </div>
    );
};
