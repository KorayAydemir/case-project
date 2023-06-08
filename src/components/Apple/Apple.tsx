import { ReactComponent as AppleSvg } from "../../assets/apple.svg";

export const Apple = ({ className }: { className: string }) => {
    return (
        <div>
            <AppleSvg className={className} />
        </div>
    );
};
