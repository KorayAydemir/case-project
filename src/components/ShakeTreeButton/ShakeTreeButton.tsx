import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { setShouldShake, setIsShakeDone } from "../../redux/slices/shakeSlice";
import { useState } from "react";
import { setGameState } from "../../redux/slices/gameStateSlice";
import { GameState } from "../../redux/slices/gameStateSlice";
export const ShakeTreeButton = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(setIsShakeDone(false));
        dispatch(setShouldShake(true));
        setIsButtonDisabled(true);

        const endTreeShakeTimer = setTimeout(() => {
            dispatch(setShouldShake(false));
        }, 3000);

        const shakeIsDoneTimer = setTimeout(() => {
            // If it is set at the same time as shouldShake, animation
            // will not work as expected, must be a css thing.
            // To observe: put this dispatch inside shakeDuration
            dispatch(setIsShakeDone(true));
        }, 3110);

        const gameOverTimer = setTimeout(() => {
            const amountOfApplesInsideBasket =
                document.getElementById("inside_basket")?.childElementCount;

            if (amountOfApplesInsideBasket === 12) {
                dispatch(setGameState({ now: GameState.WON, score: 12 }));
            } else {
                dispatch(
                    setGameState({
                        now: GameState.LOST,
                        score: amountOfApplesInsideBasket,
                    })
                );
            }
        }, 12000);

        return () => {
            clearTimeout(endTreeShakeTimer);
            clearTimeout(shakeIsDoneTimer);
            clearTimeout(gameOverTimer);
        };
    };
    return (
        <div className={`mt-10 md:absolute md:bottom-[200px] `}>
            <Button onClick={clickHandler} disabled={isButtonDisabled}>
                <span className="text-2xl">Shake it! </span>
            </Button>
        </div>
    );
};
