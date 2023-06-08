import { ReactComponent as AppleSvg } from "../../assets/apple.svg";

export const Apple = ({
    className,
    style,
}: {
    className: string;
    style: React.CSSProperties;
}) => {
    return <AppleSvg className={className} style={style} />;
};
