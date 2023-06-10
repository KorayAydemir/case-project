import { ReactComponent as BasketSvg } from "../../assets/apple_basket-cropped.svg";
export const Basket = () => {
    return (
        <div
            id="basket"
            className="absolute w-[200px] top-[150px] right-[50px]"
        >
            <BasketSvg />
        </div>
    );
};
