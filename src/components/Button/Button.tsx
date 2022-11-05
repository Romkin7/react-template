import React, { FC, PropsWithChildren, MouseEvent } from 'react';
import './Button.scss';

interface IButtonProps {
    type: 'button' | 'reset' | 'submit';
    variant: 'success' | 'disabled' | 'warning' | 'danger';
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

type ButtonProps = PropsWithChildren<IButtonProps>;

const Button: FC<ButtonProps> = ({ variant, type, onClick, children }) => {
    return (
        <button
            type={type}
            className={`button button--${variant}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
