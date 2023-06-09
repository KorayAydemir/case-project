import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { setShouldShake, setIsShakeDone } from "../../redux/slices/shakeSlice";
export const ShakeTreeButton = () => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(setShouldShake(true));
        const timer = setTimeout(() => {
            dispatch(setShouldShake(false));
            dispatch(setIsShakeDone(true));
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    };
    return (
        <div className="mt-10">
            <Button onClick={clickHandler}>
                <span className="text-2xl">Shake it! </span>
            </Button>
        </div>
    );
};
