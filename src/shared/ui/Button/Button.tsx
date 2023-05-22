import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

import style from './Button.module.scss'

export enum ButtonVariant {
  CLEAR = 'clear',
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

export enum ButtonColor {
  PRIMARY = 'primary',
  PRIMARY_INVERTED = 'primaryInverted',
  SECONDARY = 'secondary',
  SECONDARY_INVERTED = 'secondaryInverted'
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundType?: ButtonBackgroundType
  color?: ButtonColor
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
}

const Button: FC<IProps> = (props) => {
  const {
    backgroundType,
    color,
    className,
    children,
    size,
    variant,
    ...otherProps
  } = props

  const CN = clsx([
    style.button,
    style[color || ''],
    style[variant || ''],
    style[backgroundType || ''],
    style[size || ''],
    className
  ])

  return (
        <button
            {...otherProps}
            data-testid="Button"
            className={CN}
        >
            {children}
        </button>
  )
}

export default Button
