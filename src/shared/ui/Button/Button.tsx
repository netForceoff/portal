import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'
import style from './Button.module.scss'

export enum ButtonVariant {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  FILLED = 'filled',
  FILLED_INVERTED = 'filledInverted'
}

export enum ButtonBackgroundType {
  SQUARE = 'square',
  ROUND = 'round'
}

export enum ButtonSize {
  M = 'm',
  L = 'l',
  XL = 'xl'
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundType?: ButtonBackgroundType
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
}

const Button: FC<IProps> = (props) => {
  const { backgroundType, className, children, size, variant = ButtonVariant.CLEAR, ...otherProps } = props

  return (
        <button
            {...otherProps}
            data-testid="Button"
            className={clsx([style.button, style[variant], style[backgroundType || ''], style[size || ''], className])}
        >
            {children}
        </button>
  )
}

export default Button
