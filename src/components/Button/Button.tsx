import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <button
            className={`${className} bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed select-none`}
            {...rest}
        >
            {children}
        </button>
    );
};
