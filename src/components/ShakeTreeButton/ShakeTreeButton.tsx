import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { setShouldShake } from "../../redux/slices/shakeSlice";
export const ShakeTreeButton = () => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(setShouldShake(true));
    };
    return (
        <div className="mt-10">
            <Button onClick={clickHandler}>
                <span className="text-2xl">Shake it! </span>
            </Button>
        </div>
    );
};
