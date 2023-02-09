import clsx from 'clsx';
import {ButtonHTMLAttributes, FC} from 'react';
import style from './Button.module.scss';


enum ButtonVariant {
    CLEAR = 'clear',
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    variant?: ButtonVariant
}

const Button: FC<IProps> = (props) => {
    const {className, children, variant = ButtonVariant.CLEAR, ...otherProps} = props;


    return (
        <button
            {...otherProps}
            className={clsx([style.button, style[variant], className])}
        >
            {children}
        </button>
    )
}

export default Button;