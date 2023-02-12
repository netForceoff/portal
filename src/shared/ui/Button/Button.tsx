import clsx from 'clsx'
import { type ButtonHTMLAttributes, type FC } from 'react'
import style from './Button.module.scss'

export enum ButtonVariant {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
}

const Button: FC<IProps> = (props) => {
  const { className, children, variant = ButtonVariant.CLEAR, ...otherProps } = props

  return (
        <button
            {...otherProps}
            className={clsx([style.button, style[variant], className])}
        >
            {children}
        </button>
  )
}

export default Button
