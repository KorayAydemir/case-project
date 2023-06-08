import { ReactComponent as AppleSvg } from "../../assets/apple.svg";

export const Apple = ({
    className,
    style,
}: {
    className: string;
    style: any;
}) => {
    return <AppleSvg className={className} style={style} />;
};
