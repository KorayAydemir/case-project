import { Button } from "../Button/Button";
export const ShakeTreeButton = () => {
    const clickHandler = () => {
        console.log("shake the tree!");
    };
    return (
        <div className="mt-10">
            <Button onClick={clickHandler}>
                <span className="text-2xl">Shake it! </span>
            </Button>
        </div>
    );
};
