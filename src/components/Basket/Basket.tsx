import { useCallback, useEffect, useState } from "react";
import { ReactComponent as BasketSvg } from "../../assets/apple_basket-cropped.svg";
export const Basket = () => {
    const [pos, setPos] = useState({ x: 0 });

    const handleMouseMove = useCallback((e: Event) => {
        const { clientX } = e as MouseEvent;
        setPos({ x: clientX });
    }, []);

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [handleMouseMove]);
    return (
        <div
            id="basket"
            className="absolute w-[160px] bottom-[100px]"
            style={{ transform: `translateX(-50%)`, left: pos.x }}
            onMouseMove={
                handleMouseMove as unknown as React.MouseEventHandler<HTMLDivElement>
            }
        >
            <BasketSvg />
        </div>
    );
};
