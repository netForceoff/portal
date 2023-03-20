import { FC, memo, useMemo, ChangeEvent } from 'react'
import styles from './Select.module.scss'
import clsx from 'clsx'

interface Option {
  value: string
  content: string
}

interface IProps {
  className?: string
  label?: string
  options: Option[]
  value?: string
  onChange?: (value: string) => void
}

const Select: FC<IProps> = ({ className, label, options, value, onChange }): JSX.Element => {
  const optionsList = useMemo(() => {
    return options.map(option => {
      return <option key={option.value} value={option.value}>{option.content}</option>
    })
  }, [options])

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange?.(event.currentTarget.value)
  }

  return (
        <div className={clsx(styles.wrapper, className)}>
            {label && <span className={styles.label}>{label + '>'}</span>}
            <select className={styles.select} value={value} onChange={onChangeHandler}>
                {optionsList}
            </select>
        </div>
  )
}

export default memo(Select)
