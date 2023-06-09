import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { setShouldShake, setIsShakeDone } from "../../redux/slices/shakeSlice";
export const ShakeTreeButton = () => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(setIsShakeDone(false));
        dispatch(setShouldShake(true));

        const shakeDuration = setTimeout(() => {
            dispatch(setShouldShake(false));
        }, 3000);

        const yo = setTimeout(() => {
            // if it is set at the same time as shouldShake, it will not work
            // to observe: put this dispatch inside shakeDuration
            dispatch(setIsShakeDone(true));
        }, 3200);

        return () => {
            clearTimeout(shakeDuration);
            clearTimeout(yo);
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
