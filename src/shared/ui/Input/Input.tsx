import { FC, InputHTMLAttributes, memo, ChangeEvent } from 'react'

interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (value: string) => void
  className?: string
}

const Input: FC<IProps> = (props): JSX.Element => {
  const { className, onChange, ...otherProps } = props

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event.target.value)
  }

  return (
    <input
        {...otherProps}
        onChange={handleChange}
        className={className}
    />
  )
}

export default memo(Input)
