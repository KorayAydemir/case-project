import { Button } from "../Button/Button";
export const PlayAgainButton = () => {
    const clickHandler = () => {
        window.location.reload();
    };

    return (
        <div>
            <Button
                onClick={clickHandler}
                className="bg-purple-300 z-1 hover:bg-fuchsia-300"
            >
                <span className="text-black">Play Again!</span>
            </Button>
        </div>
    );
};
