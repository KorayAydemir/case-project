import { ReactComponent as TreeSvg } from "../../assets/Simple_Tree_3d_by_Merlin2525.svg";

export const Tree = ({
    className,
    style,
}: {
    className: string;
    style: React.CSSProperties;
}) => {
    return <TreeSvg className={className} style={style} />;
};
