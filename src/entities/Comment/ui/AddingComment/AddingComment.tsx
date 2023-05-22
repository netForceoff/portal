import clsx from 'clsx'
import { FC, memo, useState } from 'react'

// import styles from './AddingComment.module.scss'
import { Input, Button } from '@/shared/ui'

export interface IAddingCommentProps {
  className?: string
  buttonText: string
  onClick: (value: string) => void
}

const AddingComment: FC<IAddingCommentProps> = (props) => {
  const { buttonText, onClick, className } = props
  const [value, setValue] = useState<string>('')

  const handleClick = (): void => {
    onClick(value)
    setValue('')
  }

  const handleChange = (newValue: string): void => {
    setValue(newValue)
  }

  return (
    <div className={clsx(className)}>
        <Input value={value} onChange={handleChange} />
        <Button onClick={handleClick}>{buttonText}</Button>
    </div>
  )
}

export default memo(AddingComment)
