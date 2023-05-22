import clsx from 'clsx'
import type { ChangeEvent } from 'react'
import { memo, useMemo } from 'react'

import styles from './Select.module.scss'

interface Option <V extends string = string> {
  value: V
  content: string
}

interface IProps <V extends string = string> {
  className?: string
  label?: string
  options: Array<Option<V>>
  value?: string
  onChange?: (value: V) => void
}

const typedMemo: <T>(c: T) => T = memo

const Select = typedMemo(<V extends string>({ className, label, options, value, onChange }: IProps<V>): JSX.Element => {
  const optionsList = useMemo(() => {
    return options.map(option => {
      return <option key={option.value} value={option.value}>{option.content}</option>
    })
  }, [options])

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange?.(event.currentTarget.value as V)
  }

  return (
        <div className={clsx(styles.wrapper, className)}>
            {label && <span className={styles.label}>{label + '>'}</span>}
            <select className={styles.select} value={value} onChange={onChangeHandler}>
                {optionsList}
            </select>
        </div>
  )
})

export default Select
