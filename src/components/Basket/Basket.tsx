import { ReactComponent as BasketSvg } from "../../assets/apple_basket-cropped.svg";
import { useCursorTracker } from "../../hooks/useCursorTracker";
export const Basket = () => {
    const { pos, handleMouseMove } = useCursorTracker();

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
