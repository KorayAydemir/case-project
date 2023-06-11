import { useRef } from "react";
import { ReactComponent as BasketSvg } from "../../assets/apple_basket-optimized.svg";
import { useCursorTracker } from "../../hooks/useCursorTracker";
import { useCollisionDetector } from "../../hooks/useCollisionDetector";
export const Basket = () => {
    const { pos, handleMouseMove } = useCursorTracker();
    const basketRef = useRef<HTMLDivElement>(null);
    useCollisionDetector(basketRef);

    return (
        <div
            id="basket"
            ref={basketRef}
            className="absolute w-[150px] bottom-[110px] md:w-[90px] h-[157px] md:h-[93px]
            flex justify-center"
            style={{ transform: `translateX(-50%)`, left: pos.x }}
            onMouseMove={
                handleMouseMove as unknown as React.MouseEventHandler<HTMLDivElement>
            }
        >
            <div
                className="flex flex-wrap flex-row items-end
                 h-min absolute w-[140px] bottom-[10px] z-[-5] md:w-[80px]"
                id="inside_basket"
            ></div>
            <BasketSvg />
        </div>
    );
};
