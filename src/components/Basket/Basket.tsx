import { useRef } from "react";
import { ReactComponent as BasketSvg } from "../../assets/apple_basket-cropped.svg";
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
            className="absolute w-[135px] bottom-[110px] md:w-[90px] "
            style={{ transform: `translateX(-50%)`, left: pos.x }}
            onMouseMove={
                handleMouseMove as unknown as React.MouseEventHandler<HTMLDivElement>
            }
        >
            <div
                className="flex flex-wrap flex-row items-end
                 h-min absolute w-[140px] bottom-[0px]"
                id="inside_basket"
            ></div>
            <BasketSvg />
        </div>
    );
};
